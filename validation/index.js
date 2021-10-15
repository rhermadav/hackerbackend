import Validator from "validator";
import isEmpty from "./is-empty.js";

export const validateJsonInput = (data) => {
  const errors = {};

  data.baseJson = !isEmpty(data.baseJson) ? data.baseJson : "";
  data.jsonPatchObject = !isEmpty(data.jsonPatchObject)
    ? data.jsonPatchObject
    : "";

  if (typeof data.baseJson !== "object") {
    errors.baseJson = "BaseJson must be an object";
  }
  if (!data.baseJson) {
    errors.baseJson = "BaseJson is required";
  }

  if (!Array.isArray(data.jsonPatchObject)) {
    errors.jsonPatchObject = "jsonPatchObject must be an array";
  }
  if (!data.jsonPatchObject) {
    errors.jsonPatchObject = "jsonPatchObject field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export const validateLoginInput = (data) => {
  const errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export const validateThumbnailInput = (data) => {
  const errors = {};

  data.url = !isEmpty(data.url) ? data.url : "";

  const imageRegex = /\.(jpeg|jpg|gif|png)$/;
  if (imageRegex.test(data.url) === false) {
    errors.url = "Invalid image type";
  }

  if (!Validator.isURL(data.url)) {
    errors.url = "Enter a valid URL";
  }

  if (Validator.isEmpty(data.url)) {
    errors.url = "Image url is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
