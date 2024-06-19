import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

function Login(props) {
  const navigate = useNavigate();
  let loginSchema = object({
    email: string().required("Email is required.").email(),
    password: string().required("Password is required."),
  });
  return (
    <div className="container-fluid login">
      <header>
        <div className="logo">
          <a href="#">CabService</a>
        </div>
      </header>
      <div className="wrapper clearfix">
        <div className="login_section">
          <div className="login_form">
            <div className="logo_img">
              <div className="logo">
                <a href="/">CabService</a>
              </div>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  if (values.email && values.password) {
                    sessionStorage.setItem("isloggedIn", true);
                    props.setHasAccess(true);
                    navigate("/dashboard");
                  }

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
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      Login
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
