import React from 'react';

import { Add, Close, Remove } from '@mui/icons-material';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  FormHelperText,
  Modal,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Form, Formik, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';

import DropDown2 from '../../components/common/DropDown2';
import TextField from '../../components/common/TextField';
import UploadFile from './components/UploadFile';

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  borderRadius: '30px',
  px: 3,
  py: 3,
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.4)',
  outline: 'none',
};

const FORM_VALIDATION = Yup.object().shape({
  image: Yup.array().required('Image is required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required('Name is required'),
  link: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct link!'
    )
    .required('Please enter link'),
  description: Yup.string().required('Please enter few words'),
  date: Yup.string().required('Please select date'),
  category: Yup.string().required('Please select atleast one category'),
  price: Yup.string().required('Please enter price'),
});

function UploadNFT() {
  const [value, setValue] = React.useState(null);
  const [fixedPrice, setFixedPrice] = React.useState(true);
  const [auctionPrice, setAuctionPrice] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState([]);

  const [showModal, setShowModal] = React.useState(false);

  return (
    <Container>
      <Formik
        initialValues={{
          image: [],
          name: '',
          link: '',
          description: '',
          date: null,
          collection: 'Untitled Collection #272881336',
          category: '',
          price: '',
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log('submit method call');
          console.log(values);
        }}
        render={(props) => {
          return (
            <Form>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <UploadFile name="image" />
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
                    name="name"
                    label="NFT Name"
                    placeholder="Name"
                    variant="outlined"
                  />
                  <TextField
                    name="link"
                    fullWidth
                    label="External Link"
                    placeholder="Link"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    name="description"
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
                        props.setFieldValue('date', newValue);
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField name="date" {...params} />
                      )}
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
                                    const index = selectedCategory.findIndex(
                                      function (value) {
                                        return value === category;
                                      }
                                    );
                                    selectedCategory.splice(index, 1);
                                    props.setFieldValue(
                                      'category',
                                      [...oldArray].toString()
                                    );
                                    return [...selectedCategory];
                                  } else {
                                    props.setFieldValue(
                                      'category',
                                      [...oldArray, category].toString()
                                    );
                                    return [...oldArray, category];
                                  }
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
                                  <Remove />
                                ) : (
                                  <Add />
                                )
                              }
                            >
                              {category}
                            </Button>
                          </Grid>
                        );
                      })}
                    </Grid>
                    {selectedCategory.length !== 0 ? (
                      <></>
                    ) : (
                      <FormHelperText error={true}>
                        <ErrorMessage name="category" />
                      </FormHelperText>
                    )}
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
                    >
                      <Typography
                        textAlign={'center'}
                        onClick={() => setShowModal(true)}
                        py={2}
                        sx={{ cursor: 'pointer' }}
                      >
                        Add
                      </Typography>
                      <Modal
                        open={showModal}
                        onClose={() => {
                          setShowModal(false);
                        }}
                      >
                        <Grid
                          container
                          item
                          xs={11}
                          sm={8}
                          md={6}
                          lg={5}
                          sx={style}
                        >
                          <Grid
                            display={'flex'}
                            justifyContent="space-between"
                            width={'100%'}
                          >
                            <Typography sx={{ fontSize: '18px' }}>
                              Properties
                            </Typography>
                            <Close
                              sx={{ cursor: 'pointer' }}
                              onClick={() => {
                                setShowModal(false);
                              }}
                            />
                          </Grid>
                          <Grid container spacing={1.6} mt={0.8}>
                            <Grid container item xs={12} sm={6} gap={2}>
                              <DropDown2
                                options={['Purple', 'red', 'blue']}
                                placeholder={'Background'}
                              />
                              <DropDown2
                                options={['Black', 'red', 'blue']}
                                placeholder={'Body'}
                              />
                              <DropDown2
                                options={['Black', 'red', 'blue']}
                                placeholder={'Cloths'}
                              />
                              <DropDown2
                                options={['Black', 'red', 'blue']}
                                placeholder={'Eyes'}
                              />
                              <DropDown2
                                options={['Black', 'red', 'blue']}
                                placeholder={'Hat'}
                              />
                              <DropDown2
                                options={['Black', 'red', 'blue']}
                                placeholder={'Mouth'}
                              />
                              <DropDown2
                                options={['Black', 'red', 'blue']}
                                placeholder={'Nose'}
                              />
                            </Grid>
                            <Grid container item xs={12} sm={6} gap={2}>
                              <DropDown2
                                options={['14% have this trait', 'red', 'blue']}
                                placeholder={'Trait'}
                              />
                              <DropDown2
                                options={['14% have this trait', 'red', 'blue']}
                                placeholder={'Trait'}
                              />
                              <DropDown2
                                options={['14% have this trait', 'red', 'blue']}
                                placeholder={'Trait'}
                              />
                              <DropDown2
                                options={['14% have this trait', 'red', 'blue']}
                                placeholder={'Trait'}
                              />
                              <DropDown2
                                options={['14% have this trait', 'red', 'blue']}
                                placeholder={'Trait'}
                              />
                              <DropDown2
                                options={['14% have this trait', 'red', 'blue']}
                                placeholder={'Trait'}
                              />
                              <DropDown2
                                options={['14% have this trait', 'red', 'blue']}
                                placeholder={'Trait'}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
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
                      name="price"
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
                      type="submit"
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
            </Form>
          );
        }}
      />
    </Container>
  );
}

UploadNFT.propTypes = {
  setFieldValue: PropTypes.func,
};
export default UploadNFT;
