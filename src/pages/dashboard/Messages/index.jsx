import React from 'react';

import {
  Grid,
  List,
  ListItem,
  Button,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Icon,
  Box,
  CardActions,
  Toolbar,
  Tooltip,
  IconButton,
  ButtonGroup,
  Divider,
  Paper,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import useAuth from '../../../context/authContext';
import {
  /*userAccountSelector,*/ userPerMessageEncryptionSelector,
} from '../../../store/user';

function MessageList({ messages, handleDeleteMessage, handleSaveMessage }) {
  const listRef = React.useRef(null);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <List ref={listRef} style={{ maxHeight: '400px', overflow: 'auto' }}>
      {messages.map((msg, index) => (
        <ListItem key={index} sx={{ padding: 0.75 }}>
          <Card variant="outlined" style={{ width: '100%' }}>
            {!msg.saved && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSaveMessage(msg)}
                style={{ float: 'right', marginRight: '8px' }}
              >
                Save
              </Button>
            )}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteMessage(index, true)}
              style={{ float: 'right' }}
            >
              Delete
            </Button>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>To:</strong> {msg.to}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Message:</strong> {msg.message}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Date:</strong> {msg.date}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                {msg.saved ? (
                  <em>Saved</em>
                ) : (
                  <em>This message will self destruct in 30s</em>
                )}
              </Typography>
            </CardActions>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteMessage: PropTypes.func.isRequired,
  handleSaveMessage: PropTypes.func.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export function TabPanels({ tabs, value, handleChange }) {
  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="tabs">
        {tabs.map((tab, index) => (
          <Tab label={tab.label} {...a11yProps(index)} key={index} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          {tab.component}
        </TabPanel>
      ))}
    </div>
  );
}

TabPanels.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    })
  ).isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default function Messages() {
  const { connection } = useAuth();
  const [messages, setMessages] = React.useState([]);
  const [recipient, setRecipient] = React.useState('');
  const [message, setMessage] = React.useState('');
  // const { user } = useSelector(userAccountSelector);
  const perMessageEncryption = useSelector(userPerMessageEncryptionSelector);
  const [channel, setChannel] = React.useState('messages');

  const encryptMessage = (message) => {
    // encrypt message
    return message;
  };

  const timeoutRef = React.useRef(null);

  const decryptMessage = (message) => {
    // decrypt message
    return message;
  };

  const handleCommunication = (message, data) => {
    //console.log('incoming', message, data);
    // check op codes

    // check if current sig
    if (!data.SIG || data.SIG === '') {
      return;
    }
    if (!data.OP_CODE) {
      return;
    }

    let decryptedMessage = data.data;
    const removeFirst = () => {
      setMessages((prevMessages) => prevMessages.slice(1));
      timeoutRef.current = setTimeout(removeFirst, 30000);
    };
    switch (data.OP_CODE) {
      case 'MESSAGE':
        // console.log('Message Data', data.data);
        if (perMessageEncryption) {
          // decrypt message
          decryptedMessage = decryptMessage(data.data);
        }

        setMessages((prevMessages) => {
          const newMessages = [...prevMessages, decryptedMessage];
          if (!timeoutRef.current) {
            timeoutRef.current = setTimeout(removeFirst, 30000);
          }
          return newMessages;
        });
        break;
      default:
        // console.log(message);
        return;
    }
    return;
  };

  const handleChannelChange = (value) => {
    setChannel(value);
  };

  const channels = ['messages', 'private', 'voting', 'saved'];

  const handleDeleteMessage = React.useCallback((index, force = false) => {
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];
      if (force || (newMessages[index] && !newMessages[index].saved)) {
        // console.log('Deleting message at index', index);
        newMessages.splice(index, 1);
        return newMessages;
      }
      return newMessages;
    });
  }, []);

  const removeFirst = React.useCallback(() => {
    // get the first unsaved message and delete it
    const firstUnsavedIndex = messages.findIndex((msg) => !msg.saved);
    handleDeleteMessage(firstUnsavedIndex);
  }, [handleDeleteMessage, messages]);

  function handleSendMessage(event) {
    event.preventDefault();
    if (!channel || !message) {
      return;
    }
    const newMessage = {
      to: recipient,
      from: connection.id,
      channel,
      message: perMessageEncryption ? encryptMessage(message) : message,
      date: new Date().toISOString().split('T')[0],
      saved: false,
    };
    // console.log('Handle Send :', connection)
    connection.send(
      JSON.stringify({
        OP_CODE: 'MESSAGE',
        SIG: 'No_Sig',
        from: 'anonymous',
        to: recipient,
        data: newMessage,
      })
    );

    setMessages((prevMessages) => {
      const newMessages = [...prevMessages, newMessage];
      if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(removeFirst, 30000);
      }
      return newMessages;
    });
    setRecipient('');
    setMessage('');
  }

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

  function handleSaveMessage(message) {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg === message ? { ...msg, saved: true } : msg
      )
    );
  }

  React.useEffect(() => {
    connection.onmessage = async (message) => {
      // console.log();
      try {
        const data = JSON.parse(await message.data.text(), false, 2);
        handleCommunication(connection, data);
      } catch (error) {
        console.error(error);
      }
    };
  });

  React.useEffect(() => {
    if (messages.length > 0) {
      timeoutRef.current = setTimeout(removeFirst, 30000);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [messages, removeFirst]);

  return (
    <Paper
      elevation={3}
      sx={{ height: 'calc(100vh - 135px)', padding: 0, marginRight: '6px' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 0.05,
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default',
            opacity: 0.8,
          }}
        >
          <Toolbar
            variant="dense"
            orientation="vertical"
            sx={{
              paddingRight: '2px !important',
              paddingLeft: '2px !important',
              paddingTop: '6px !important',
              height: '100%',
              justifyContent: 'flex-start',
            }}
          >
            <ButtonGroup
              orientation="vertical"
              size="small"
              sx={{ height: '100%' }}
            >
              <IconButton>
                <Icon>contacts</Icon>
              </IconButton>
              <IconButton>
                <Icon>add</Icon>
              </IconButton>
            </ButtonGroup>
          </Toolbar>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          <Grid container spacing={0.25} sx={{ padding: 0.25, height: '100%' }}>
            <Grid
              item
              xs={12}
              sx={{ bgcolor: 'background.default', opacity: 0.8 }}
            >
              <Toolbar
                variant="dense"
                orientation="horizontal"
                sx={{
                  paddingRight: '0px !important',
                  paddingLeft: '0px !important',
                }}
              >
                <ButtonGroup orientation="horizontal" size="small">
                  <Tooltip title="Contacts" arrow placement="bottom">
                    <IconButton>
                      <Icon>contacts</Icon>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Menu" arrow placement="bottom">
                    <IconButton>
                      <Icon>menu</Icon>
                    </IconButton>
                  </Tooltip>
                </ButtonGroup>{' '}
                <Tabs
                  value={channel}
                  onChange={(e, v) => handleChannelChange(v)}
                  textColor="inherit"
                  indicatorColor="primary"
                >
                  {channels.map((ch) => (
                    <Tab key={ch} label={ch} value={ch} {...a11yProps(0)} />
                  ))}
                </Tabs>
              </Toolbar>
            </Grid>
            <Grid item xs={12} sx={{ height: '100%' }}>
              <Box
                sx={{
                  padding: 1,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6">General Chat (Public)</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'calc(100% - 110px)',
                  }}
                >
                  <Box sx={{ padding: 0, width: '240px' }}>
                    <fieldset style={{ height: '100%', overflow: 'hidden' }}>
                      <legend>Channels</legend>
                      <Toolbar
                        variant="dense"
                        orientation="vertical"
                        sx={{
                          paddingRight: '1px !important',
                          paddingLeft: '1px !important',
                          paddingTop: '3px !important',
                        }}
                      >
                        <ButtonGroup
                          orientation="vertical"
                          size="small"
                          fullWidth
                          sx={{ padding: 0 }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<Icon>contacts</Icon>}
                            fullWidth
                          >
                            Channel Name
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<Icon>add</Icon>}
                            fullWidth
                          >
                            Channel Name
                          </Button>
                        </ButtonGroup>
                      </Toolbar>
                    </fieldset>
                  </Box>
                  <Divider orientation="vertical" flexItem />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        padding: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      {channels.map((ch) => (
                        <TabPanel
                          key={ch}
                          value={channel}
                          index={ch}
                          style={{ maxHeight: 'calc(100% - 230px)' }}
                        >
                          <MessageList
                            messages={messages.filter(
                              (msg) => msg.channel === ch
                            )}
                            handleDeleteMessage={handleDeleteMessage}
                            handleSaveMessage={handleSaveMessage}
                          />
                        </TabPanel>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        padding: 1,
                      }}
                    >
                      <Divider sx={{ marginTop: '6px', marginBottom: '6px' }} />
                      <Typography variant="h6">Send Message</Typography>
                      <Box
                        sx={{
                          padding: 1,
                        }}
                      >
                        <form
                          onSubmit={handleSendMessage}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                          }}
                        >
                          <TextField
                            id="recipient"
                            name="recipient"
                            label="Recipient"
                            variant="outlined"
                            fullWidth
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            autoComplete="off"
                            size="small"
                          />
                          <TextField
                            id="message"
                            name="message"
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={2}
                            fullWidth
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            autoComplete="off"
                          />

                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                          >
                            Send
                          </Button>
                        </form>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}
