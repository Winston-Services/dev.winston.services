import React from 'react';

import { Form as FormikForm, Formik } from 'formik';
import PropTypes from 'prop-types';

function Form({ initialValues, validationSchema, onSubmit, children }) {
  return (
    <Formik
      initialValues={{
        ...initialValues,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormikForm >{children}</FormikForm>
    </Formik>
  );
}

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { Form };
export default Form;
