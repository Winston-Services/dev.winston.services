import React from 'react';

import {
  Grid,
  List,
  ListItem,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

import useAuth from '../../../context/authContext';

function MessageList({ messages }) {
  const listRef = React.useRef(null);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <List ref={listRef} style={{ maxHeight: '400px', overflow: 'auto' }}>
      {messages.map((msg, index) => (
        <ListItem key={index}>
          <Card variant="outlined" style={{ width: '100%' }}>
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
};

export default function Messages() {
  const { connection } = useAuth();
  const [messages, setMessages] = React.useState([]);
  const [recipient, setRecipient] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleCommunication = (message, data) => {
    console.log('incoming', message, data);
    if (!data.SIG || data.SIG === '') {
      return;
    }
    if (!data.OP_CODE) {
      return;
    }

    switch (data.OP_CODE) {
      case 'MESSAGE':
        console.log('Message Data', data.data);
        setMessages([...messages, data.data]);
        break;
      default:
        console.log(message);
        return;
    }
    return;
    // check op codes
    // check if current sig
  };

  function handleSendMessage(event) {
    event.preventDefault();
    const newMessage = {
      to: recipient,
      message: message,
      date: new Date().toISOString().split('T')[0],
    };
    console.log('Handle Send :', connection)
    connection.send(
      JSON.stringify({
        OP_CODE: 'MESSAGE',
        SIG: 'No_Sig',
        from: 'anonymous',
        to: recipient,
        data: newMessage,
      })
    );
    setMessages([...messages, newMessage]);
    setRecipient('');
    setMessage('');
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
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h2>Message Log</h2>
          <MessageList messages={messages} />
        </Grid>
        <Grid item xs={12}>
          <h2>Send Message</h2>
          <form
            onSubmit={handleSendMessage}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <TextField
              id="recipient"
              name="recipient"
              label="Recipient"
              variant="outlined"
              fullWidth
              required
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              autoComplete="off"
            />
            <TextField
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
