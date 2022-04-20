import React, { useEffect } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Modal,
  Backdrop,
  Fade,
  Box,
} from '@mui/material';
import { style } from '@mui/system';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDropzone } from 'react-dropzone';

import { ReactComponent as UploadImage } from './../../assets/upload_image.svg';

const category = [
  'Art',
  'Market Place',
  'Fashion',
  'Sports',
  'Art1',
  'Market Place1',
  'Art2',
  'MusicIndustry',
];

function UploadNFT() {
  const [value, setValue] = React.useState(null);
  const [fixedPrice, setFixedPrice] = React.useState(true);
  const [auctionPrice, setAuctionPrice] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { getRootProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => {
          const a = URL.createObjectURL(file);
          return Object.assign(file, {
            preview: a,
          });
        })
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={URL.createObjectURL(file)} height="100%" width="100%" />
      </div>
    </div>
  ));
  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <div {...getRootProps({ className: 'dropzone' })}>
            {thumbs.length !== 0 ? (
              <aside>{thumbs}</aside>
            ) : (
              <Paper
                elevation={0}
                sx={{
                  textAlign: 'center',
                  border: '2px dashed #6D6691',
                }}
              >
                <Grid item mt={11.2}>
                  <UploadImage />
                </Grid>
                <Typography
                  sx={{ fontSize: '18px', mt: 2.5, mb: 1 }}
                  textAlign={'center'}
                >
                  Drag and drop or Upload Image,Video, Audio or 3D Model
                </Typography>
                <Typography
                  variant="subtitle2"
                  textAlign={'center'}
                  sx={{ color: '#B3AFC8', mb: 7 }}
                >
                  You can upload maximum 100MB
                  <br /> File Supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                  MAV, OGG, GLB, GLTF.
                </Typography>
              </Paper>
            )}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection={'column'}
          gap={2}
        >
          <TextField
            fullWidth
            label="NFT Name"
            placeholder="Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="External Link"
            placeholder="Link"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Description"
            placeholder="Description"
            variant="outlined"
            multiline={true}
            rows={8}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Sale date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Grid item>
            <Typography mb={1} variant="subtitle1">
              Collection
            </Typography>
            <Paper
              elevation={0}
              sx={{ pl: 1.4, py: 2, border: '1px solid #483996' }}
            >
              <Typography variant="subtitle1">
                Untitled Collection #272881336
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Typography mb={1} variant="subtitle1">
              Category
            </Typography>
            <Grid container spacing={2}>
              {category.map((category, index) => {
                return (
                  <Grid item key={index}>
                    <Button
                      onClick={() =>
                        setSelectedCategory((oldArray) => {
                          if (selectedCategory.includes(category)) {
                            const index = selectedCategory.findIndex(function (
                              value
                            ) {
                              return value === category;
                            });
                            selectedCategory.splice(index, 1);
                            return [...selectedCategory];
                          } else return [...oldArray, category];
                        })
                      }
                      variant="contained"
                      color={
                        selectedCategory.includes(category)
                          ? 'secondary'
                          : 'primary'
                      }
                      endIcon={
                        selectedCategory.includes(category) ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                    >
                      {category}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Typography mb={1} variant="subtitle1">
              Properties
            </Typography>
            <Paper
              elevation={0}
              sx={{
                width: '157px',
                border: '1px dashed #9283DC',
              }}
              onClick={handleOpen}
            >
              <Typography textAlign={'center'} py={2}>
                Add
              </Typography>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </Paper>
          </Grid>
          <Grid item>
            <Typography mb={1} variant="subtitle1">
              Price and Type
            </Typography>
            <Grid
              display={'flex'}
              sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
              gap={1}
            >
              <Button
                variant="contained"
                color={fixedPrice ? 'secondary' : 'primary'}
                sx={{ width: { xs: '100%', sm: 'auto' } }}
                onClick={() => {
                  setFixedPrice(true);
                  setAuctionPrice(false);
                }}
              >
                Fixed
              </Button>
              <Button
                variant="contained"
                color={auctionPrice ? 'secondary' : 'primary'}
                sx={{ width: { xs: '100%', sm: 'auto' } }}
                onClick={() => {
                  setAuctionPrice(true);
                  setFixedPrice(false);
                }}
              >
                Auction
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography mb={1.3} variant="subtitle1">
              Price in USD: $0.00
            </Typography>
            <TextField
              fullWidth
              label={
                fixedPrice
                  ? 'Fixed price - in USD'
                  : 'Starting Bid Price - in USD'
              }
              placeholder="0.0"
              variant="outlined"
            />
          </Grid>
          {auctionPrice ? (
            <Grid item>
              <Typography mb={1} variant="subtitle1">
                Auction Length
              </Typography>
              <Paper
                elevation={0}
                sx={{ pl: 1.4, py: 2, border: '1px solid #483996' }}
              >
                <Typography variant="subtitle1">12 Hours</Typography>
              </Paper>
            </Grid>
          ) : (
            <></>
          )}

          <Grid
            display={'flex'}
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            gap={2.5}
            mt={3}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Upload NFT
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UploadNFT;
