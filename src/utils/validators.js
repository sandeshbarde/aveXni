/**
 * Required Field
 */
export function required(value) {
  if (value === null || value === undefined) {
    return "This field is required.";
  }

  if (typeof value === "string" && value.trim() === "") {
    return "This field is required.";
  }

  return "";
}

/**
 * Email Validation
 */
export function email(value) {
  if (!value) return "Email is required.";

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(value)
    ? ""
    : "Please enter a valid email address.";
}

/**
 * Indian Phone Number
 */
export function phone(value) {
  if (!value) return "Phone number is required.";

  const regex = /^[6-9]\d{9}$/;

  return regex.test(value)
    ? ""
    : "Please enter a valid 10-digit phone number.";
}

/**
 * Password
 */
export function password(value) {
  if (!value) {
    return "Password is required.";
  }

  if (value.length < 8) {
    return "Password must be at least 8 characters.";
  }

  return "";
}

/**
 * Confirm Password
 */
export function confirmPassword(
  password,
  confirm
) {
  if (!confirm) {
    return "Confirm your password.";
  }

  return password === confirm
    ? ""
    : "Passwords do not match.";
}

/**
 * Name Validation
 */
export function name(value) {
  if (!value) return "Name is required.";

  const regex =
    /^[A-Za-z\s]{2,50}$/;

  return regex.test(value)
    ? ""
    : "Please enter a valid name.";
}

/**
 * Number
 */
export function number(value) {
  if (value === "" || value === null) {
    return "Number is required.";
  }

  return isNaN(value)
    ? "Must be a number."
    : "";
}

/**
 * Min Length
 */
export function minLength(
  value,
  min
) {
  if (!value) return "";

  return value.length >= min
    ? ""
    : `Minimum ${min} characters required.`;
}

/**
 * Max Length
 */
export function maxLength(
  value,
  max
) {
  if (!value) return "";

  return value.length <= max
    ? ""
    : `Maximum ${max} characters allowed.`;
}

/**
 * URL
 */
export function url(value) {
  if (!value) return "";

  try {
    new URL(value);
    return "";
  } catch {
    return "Invalid URL.";
  }
}

/**
 * Image File
 */
export function image(file) {
  if (!file) {
    return "Please select an image.";
  }

  const allowed = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
  ];

  if (!allowed.includes(file.type)) {
    return "Only JPG, PNG or WEBP images are allowed.";
  }

  return "";
}

/**
 * File Size
 */
export function fileSize(
  file,
  maxMB = 5
) {
  if (!file) return "";

  const maxBytes =
    maxMB * 1024 * 1024;

  return file.size <= maxBytes
    ? ""
    : `Maximum file size is ${maxMB}MB.`;
}

/**
 * Validate Order Form
 */
export function validateOrder(data) {
  const errors = {};

  errors.name = name(data.name);

  errors.email = email(data.email);

  errors.phone = phone(data.phone);

  errors.address = required(
    data.address
  );

  errors.portraitType = required(
    data.portraitType
  );

  errors.size = required(
    data.size
  );

  errors.image = image(data.image);

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
}

/**
 * Validate Login
 */
export function validateLogin(data) {
  const errors = {};

  errors.email = email(data.email);

  errors.password = password(
    data.password
  );

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
}

/**
 * Validate Register
 */
export function validateRegister(
  data
) {
  const errors = {};

  errors.name = name(data.name);

  errors.email = email(data.email);

  errors.phone = phone(data.phone);

  errors.password = password(
    data.password
  );

  errors.confirmPassword =
    confirmPassword(
      data.password,
      data.confirmPassword
    );

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  return errors;
}

/**
 * Default Export
 */
const validators = {
  required,
  email,
  phone,
  password,
  confirmPassword,
  name,
  number,
  minLength,
  maxLength,
  url,
  image,
  fileSize,
  validateOrder,
  validateLogin,
  validateRegister,
};

export default validators;