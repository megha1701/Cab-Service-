import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { object, string } from "yup";

function AddUser(props) {
  let userSchema = object({
    firstName: string().required("First Name is required."),
    lastName: string().required("Last Name is required."),
    email: string().required("Email is required.").email(),
    contact: string().required("Contact is required."),
    address: string().required("Address is required."),
    role: string().required("Role is required."),
    status: string().required("Status is required."),
  });

  async function addUser(user) {
    user.createdOn = new Date();
    user.updatedOn = new Date();
    try {
      const response = await axios.post("http://localhost:4200/users", user);
      console.log(response);
      props.addEditRecord();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          address: "",
          role: "",
          status: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            addUser(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col mb-3">
                <label for="firstName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>
              <div class="col mb-3">
                <label for="lastName" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>
            </div>
            <div class="row">
              <div class="col mb-3">
                <label for="email" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div class="col mb-3">
                <label for="contact" class="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="contact"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact}
                />
                {errors.contact && touched.contact && (
                  <span className="error">{errors.contact}</span>
                )}
              </div>
            </div>
            <div class="row">
              <div class="col mb-3">
                <label for="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                {errors.address && touched.address && (
                  <span className="error">{errors.address}</span>
                )}
              </div>
              <div class="col mb-3">
                <label for="role" class="form-label">
                  Role
                </label>
                <select
                  class="form-select"
                  id="role"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.role}
                  aria-label="Default select example"
                >
                  <option selected>--- Choose Role ---</option>
                  <option value="superAdmin">superAdmin</option>
                  <option value="admin">admin</option>
                  <option value="driver">driver</option>
                  <option value="compnayAdmin">compnayAdmin</option>
                  <option value="employee">employee</option>
                </select>
                {errors.role && touched.role && (
                  <span className="error">{errors.role}</span>
                )}
              </div>
            </div>
            <div class="row">
              <div class="col mb-3">
                <label for="status" class="form-label">
                  Status
                </label>
                <select
                  class="form-select"
                  id="status"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.status}
                  aria-label="Default select example"
                >
                  <option selected>--- Choose Status ---</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                {errors.status && touched.status && (
                  <span className="error">{errors.status}</span>
                )}
              </div>
              <div class="col mb-3"></div>
            </div>
            <div className="row">
              <div class="col mb-3"></div>
              <div class="col mb-3">
                <Button
                  variant="success"
                  className="btn-dir"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
                <Button
                  variant="danger"
                  className="btn-dir"
                  onClick={() => props.setShowAdd(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddUser;
