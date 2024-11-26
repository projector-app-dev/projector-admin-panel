export const validateNewsFields = (values) => {
    const errors = {};
    if (!values.picture) {
        errors.picture = 'ra.validation.required';
    }
    return errors
  };