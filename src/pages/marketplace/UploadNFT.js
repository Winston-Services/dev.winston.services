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
  capitalize,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Form, Formik, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import DropDown from '../../components/common/DropDown';
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
  maxHeight: '100%',
  bgcolor: 'background.paper',
  borderRadius: '30px',
  px: 3,
  py: 3,
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.4)',
  outline: 'none',
  overflowY: 'auto',
};

const digitsOnly = (value) => /^\d+$/.test(value);

const FORM_VALIDATION = Yup.object().shape({
  image: Yup.string().required('Please select image'),
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
  category: Yup.string().required('Please select at least one category'),
  price: Yup.string()
    .test('Digits only', 'The field should have digits only', digitsOnly)
    .required('Please enter price'),
  selectedProperties: Yup.bool().oneOf(
    [true],
    'Please select at least one property'
  ),
});

function UploadNFT() {
  const [value, setValue] = React.useState(null);
  const [fixedPrice, setFixedPrice] = React.useState(true);
  const [auctionPrice, setAuctionPrice] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState([]);

  const [showModal, setShowModal] = React.useState(false);

  const navigate = useNavigate();

  const properties = [
    {
      name: 'background',
      title: 'Background',
      options: ['Purple', 'Red', 'Black'],
      traitOptions: ['14% have this trait'],
    },
    {
      name: 'body',
      title: 'Body',
      options: ['Purple', 'Red', 'Black'],
      traitOptions: ['14% have this trait'],
    },
    {
      name: 'cloths',
      title: 'Cloths',
      options: ['Purple', 'Red', 'Black'],
      traitOptions: ['14% have this trait'],
    },
    {
      name: 'eyes',
      title: 'Eyes',
      options: ['Purple', 'Red', 'Black'],
      traitOptions: ['14% have this trait'],
    },
    {
      name: 'hat',
      title: 'Hat',
      options: ['Purple', 'Red', 'Black'],
      traitOptions: ['14% have this trait'],
    },
    {
      name: 'mouth',
      title: 'Mouth',
      options: ['Purple', 'Red', 'Black'],
      traitOptions: ['14% have this trait'],
    },
    {
      name: 'nose',
      title: 'Nose',
      options: ['Purple', 'Red', 'Black'],
      traitOptions: ['14% have this trait'],
    },
  ];

  const [initialValue, setInitialValue] = React.useState({
    image: '',
    name: '',
    link: '',
    description: '',
    date: null,
    collection: 'Untitled Collection #272881336',
    category: '',
    selectedProperties: false,
    properties: {
      background: {
        background: '',
        backgroundTrait: '14% have this trait',
      },
      body: {
        body: '',
        bodyTrait: '14% have this trait',
      },
      cloths: { cloths: '', clothsTrait: '14% have this trait' },
      eyes: { eyes: '', eyesTrait: '14% have this trait' },
      hat: { hat: '', hatTrait: '14% have this trait' },
      mouth: { mouth: '', mouthTrait: '14% have this trait' },
      nose: { nose: '', noseTrait: '14% have this trait' },
    },
    price: '',
    auctionLength: '12 Hours',
  });

  return (
    <Container>
      <Formik
        initialValues={{
          ...initialValue,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          return navigate('/user-profile/upload-nft/nft-created');
        }}
      >
        {(props) => {
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
                      format="MM-dd-y"
                      value={value}
                      onChange={(newValue) => {
                        let formattedDate = `${
                          newValue.getMonth() + 1
                        }/${newValue.getDate()}/${newValue.getFullYear()}`;
                        props.setFieldValue('date', formattedDate);
                        setValue(formattedDate);
                      }}
                      renderInput={(params) => (
                        <TextField name="date" autoComplete="off" {...params} />
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
                    <Grid container spacing={2}>
                      {Object.keys(initialValue.properties).map((items) => {
                        const item = Object.keys(
                          initialValue.properties[items]
                        );
                        return (
                          initialValue.properties[items][item[0]] && (
                            <Grid key={item[0]} item xs={6} sm={4}>
                              <Paper
                                elevation={0}
                                sx={{
                                  p: 1,
                                  borderRadius: 4,
                                  textAlign: 'center',
                                  border: '1px dashed #9283DC',
                                }}
                              >
                                <Grid
                                  display={'flex'}
                                  flexDirection="column"
                                  textAlign={'center'}
                                >
                                  <Typography
                                    component={'span'}
                                    variant="subtitle1"
                                  >
                                    {capitalize(items)}
                                  </Typography>
                                  <Typography
                                    component={'span'}
                                    variant="subtitle1"
                                  >
                                    {initialValue.properties[items][item[0]]}
                                  </Typography>
                                  <Typography
                                    component={'span'}
                                    variant="subtitle1"
                                    fontWeight={'700'}
                                  >
                                    {initialValue.properties[items][item[1]]}
                                  </Typography>
                                </Grid>
                              </Paper>
                            </Grid>
                          )
                        );
                      })}
                    </Grid>
                    <Paper
                      elevation={0}
                      sx={{
                        width: '170px',
                        border: '1px dashed #9283DC',
                        marginTop: 1.5,
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
                          {properties.map((item) => {
                            return (
                              <Grid
                                key={item.name}
                                container
                                spacing={1.6}
                                mt={0.8}
                              >
                                <Grid item xs={12} sm={6}>
                                  <DropDown
                                    label={item.title}
                                    // name={item.name}
                                    name={
                                      'properties.' +
                                      item.name +
                                      '.' +
                                      item.name
                                    }
                                    options={item.options}
                                    placeholder={item.title}
                                    onChange={(value) => {
                                      props.setFieldValue(
                                        'selectedProperties',
                                        true
                                      );
                                      return setInitialValue({
                                        ...initialValue,
                                        properties: {
                                          ...initialValue.properties,
                                          [item.name]: {
                                            ...initialValue.properties[
                                              item.name
                                            ],
                                            [item.name]: value,
                                          },
                                        },
                                      });
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                  <DropDown
                                    label="Trait"
                                    name={
                                      'properties.' +
                                      item.name +
                                      '.' +
                                      item.name +
                                      'Trait'
                                    }
                                    options={item.traitOptions}
                                    onChange={(value) =>
                                      setInitialValue({
                                        ...initialValue,
                                        properties: {
                                          ...initialValue.properties,
                                          [item.name]: {
                                            ...initialValue.properties[
                                              item.name
                                            ],
                                            [item.name + 'Trait']: value,
                                          },
                                        },
                                      })
                                    }
                                  />
                                </Grid>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Modal>
                    </Paper>
                    {initialValue.selectedProperties === true ? (
                      <></>
                    ) : (
                      <FormHelperText error={true}>
                        <ErrorMessage name="selectedProperties" />
                      </FormHelperText>
                    )}
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
                    <Grid
                      container
                      item
                      display={'flex'}
                      gap={2}
                      alignItems="baseline"
                    >
                      <Typography mb={1.3} variant="subtitle1">
                        Price in USD: $0.00
                      </Typography>
                    </Grid>
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

                      <DropDown
                        label="length"
                        name="auctionLength"
                        options={['12 Hours', '6 Hours']}
                        placeholder={'12 Hours'}
                      />
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
      </Formik>
    </Container>
  );
}

UploadNFT.propTypes = {
  setFieldValue: PropTypes.func,
  errors: PropTypes.object,
};
export default UploadNFT;
