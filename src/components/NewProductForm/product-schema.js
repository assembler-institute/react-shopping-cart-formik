import * as Yup from "yup";

const productSchema = Yup.object().shape({
  title: Yup.string()
    .required("The title is required")
    .min(2, "The title is too short!")
    .max(50, "The title is too long!"),
  price: Yup.number()
    .required("The price is required")
    .integer("The price must be an integer")
    .positive("The price must be a positive number"),
  img: Yup.string()
    .required("The image url is required")
    .url("The image url is invalid"),
  shortDescription: Yup.string()
    .required("The short description is required")
    .min(2, "The short description is too short!")
    .max(50, "The short description is too long!"),
  longDescription: Yup.string()
    .required("The long description is required")
    .min(2, "The long description is too short!")
    .max(50, "The long description is too long!"),
  unitsInStock: Yup.number()
    .required("The units in stock is required")
    .integer("The units in stock must be an integer")
    .positive("The units in stock must be a positive number"),
  authorFirstName: Yup.string()
    .required("The author first name is required")
    .min(2, "The author first name is too short!"),
  authorLastName: Yup.string()
    .required("The author last name is required")
    .min(2, "The author last name is too short!"),
  authorEmail: Yup.string().required("Required").email("Invalid email"),
});

export default productSchema;
