import React from "react";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";

import Input from "../Input";
import Button from "../Button";

import productSchema from "./product-schema";

function addProductDetails(product) {
  return {
    id: uuid(),
    ...product,
    quantity: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: {
      upVotes: {
        upperLimit: 10,
        currentValue: 0,
      },
      downVotes: {
        lowerLimit: 10,
        currentValue: 0,
      },
    },
    author: {
      id: uuid(),
      ...product.author,
    },
  };
}

function NewProductForm({ toggleNewProductForm, saveNewProduct }) {
  return (
    <div className="row mb-4 mt-2">
      <div className="col col-10">
        <div className="row justify-content-between">
          <div className="col col-8">
            <h2>New product</h2>
          </div>
          <div className="col col-4 ml-auto d-flex justify-content-end">
            <Button onClick={toggleNewProductForm}>Close form</Button>
          </div>
        </div>
        <hr />
      </div>
      <div className="col col-10">
        <Formik
          initialValues={{
            title: "",
            price: 0,
            img: "",
            shortDescription: "",
            longDescription: "",
            unitsInStock: 0,
            authorFirstName: "",
            authorLastName: "",
            authorEmail: "",
          }}
          validationSchema={productSchema}
          onSubmit={(values) => {
            const newProduct = addProductDetails(values);
            saveNewProduct(newProduct);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            values,
            touched,
            isValidating,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* Title */}
              <Input
                type="text"
                label="Product title"
                id="title"
                value={values.title}
                placeholder="Product title"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.title}
                errorMessage={errors.title}
              />
              {/* Price */}
              <Input
                type="number"
                label="Product price"
                id="price"
                value={values.price}
                placeholder=""
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.price}
                errorMessage={errors.price}
              />
              {/* Image */}
              <Input
                type="url"
                label="Product image"
                id="img"
                value={values.img}
                placeholder="Image url"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.img}
                errorMessage={errors.img}
              />
              {/* Short description */}
              <Input
                type="text"
                label="Short description"
                id="shortDescription"
                value={values.shortDescription}
                placeholder="Add a short description"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.shortdescription}
                errorMessage={errors.shortdescription}
              />
              {/* Long description */}
              <Input
                type="text"
                label="Long description"
                id="longDescription"
                value={values.longDescription}
                placeholder="Add a long description"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.longDescription}
                errorMessage={errors.longDescription}
              />
              {/* Units in stock */}
              <Input
                type="number"
                label="Units in stock"
                id="unitsInStock"
                value={values.unitsInStock}
                placeholder=""
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.unitsInStock}
                errorMessage={errors.unitsInStock}
              />
              {/* First name */}
              <Input
                type="text"
                label="First name"
                id="authorFirstName"
                value={values.authorFirstName}
                placeholder="John"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.authorFirstName}
                errorMessage={errors.authorFirstName}
              />
              {/* Last name */}
              <Input
                type="text"
                label="Last name"
                id="authorLastName"
                value={values.authorLastName}
                placeholder="Smith"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.authorLastName}
                errorMessage={errors.authorLastName}
              />
              {/* Email */}
              <Input
                type="email"
                label="Email"
                id="authorEmail"
                value={values.authorEmail}
                placeholder="hello@johnsmith.com"
                handleChange={handleChange}
                handleBlur={handleBlur}
                hasErrorMessage={touched.authorEmail}
                errorMessage={errors.authorEmail}
              />
              <Button submitButton block disabled={isValidating || !isValid}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewProductForm;
