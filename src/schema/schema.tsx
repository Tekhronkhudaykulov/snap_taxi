import * as yup from "yup";

export const addDriverSchema = yup.object().shape({
  avatar: yup
    .string("email should be a string")
    .required("email address is required"),
  name: yup.string("name should be a string").required("name is required"),
  //   car: {
  //     type: yup
  //       .string("type should be a string")
  //       .required("type address is required"),
  //     color: yup.string("color should be a string").required("color is required"),
  //     number: yup
  //       .string("number should be a string")
  //       .required("number is required"),
  //   },
  phone: yup
    .string("phone type should be a string")
    .required("phone type is required"),
  birthday: yup
    .string("phone type should be a string")
    .required("phone type is required"),
});
