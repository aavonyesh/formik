import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios'

function AddBook() {
  const URL = "http://localhost:3000/books"
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        price: "",
        author: "",
        publishedYear: "",
        genre: "",
        language: "",
        image: "",
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(50, "Must be 50 characters or less")
          .min(3, "Must be 3 characters")
          .required("Required"),
        description: Yup.string()
          .max(50, "Must be 50 characters or less")
          .min(20, "Must be 20 characters")
          .required("Required"),
        price: Yup.number()
          .positive()
          .required("Required"),
        author: Yup.string()
          .required("Required")
          .min(3, "Must be 3 characters")
          .max(15, "Must be 15 characters or less"),
        publishedYear: Yup.string().required("Required"),
        genre: Yup.string()
          .max(20, "Must be 20 characters or less")
          .min(3, "Must be 3 characters")
          .required("Required"),
        language: Yup.string()
          .max(20, "Must be 20 characters or less")
          .min(3, "Must be 3 characters")
          .required("Required"),
        image: Yup.string().url().required("Required"),
      })}
      onSubmit={async (values, { resetForm }) => {
        try {
          const res = await axios.post(URL, values);
          console.log("Success:", res.data);
          resetForm();
        } catch (error) {
          console.error("Error submitting form:", error.response?.data || error.message);
        }
      }}
    >
      <Form>
        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />
        <br />
        <label htmlFor="description">Description</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />
        <br />
        <label htmlFor="price">Price</label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />
        <br />
        <label htmlFor="author">Author</label>
        <Field name="author" type="text" />
        <ErrorMessage name="author" />
        <br />
        <label htmlFor="publishedYear">Published Year</label>
        <Field name="publishedYear" type="text" />
        <ErrorMessage name="publishedYear" />
        <br />

        <label htmlFor="genre">Genre</label>
        <Field name="genre" type="text" />
        <ErrorMessage name="genre" />
        <br />
        <label htmlFor="language">Language</label>
        <Field name="language" type="text" />
        <ErrorMessage name="language" />
        <br />
        <label htmlFor="image">İmage address</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default AddBook;
