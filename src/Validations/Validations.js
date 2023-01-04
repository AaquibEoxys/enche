const Validations = (name, value, setErrors, errors, validationName) => {
  let errorsObject = {};
  let errorExist = false;


  const validationNames = {
    email: () => {
      if (value === "" || value === null || value === undefined) {
        errorsObject[name] = "Please enter email";
        errorExist = true;
      } else if (!value.trim()) {
        errorsObject[name] = "Email is required";
        errorExist = true;
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        errorsObject[name] = "Please type a valid email address";
        errorExist = true;
      }
    },
    password: () => {
      if (value === "" || value === null || value === undefined) {
        errorsObject[name] = "Please enter password";
        errorExist = true;
      } else if (value.length < 6) {
        errorsObject[name] = "Password must be longer then 6 character";
        errorExist = true;
      }
    },
  };

  validationNames[validationName]();
  if (errorExist) {
    setErrors({ ...errors, ...errorsObject });
    return true;
  } else {
    return false;
  }
};

export default Validations;
