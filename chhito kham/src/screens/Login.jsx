import { Button, Snackbar, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        className="register-main"
        style={{
          display: "flex",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
            fullName: "",
            dob: "",
            location: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address.")
              .required("Email is required.")
              .min(5, "Must be at least 5 characters.")
              .max(55, "Must be at most 55 characters.")
              .trim(),

            password: Yup.string()
              .max(25, "Must be at most 25 characters.")
              .required("Password is required.")
              .trim(),
          })}
          onSubmit={async (values) => {
            const response = await fetch("http://localhost:8000/login/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            const json = await response.json();

            if (json.success) {
              navigate("/");
            } else {
              alert("Invalid Credentials.");
            }
          }}
        >
          {({ errors, handleSubmit, touched, getFieldProps }) => (
            <form
              onSubmit={handleSubmit}
              className="register-glass"
              style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
                minWidth: "350px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
              }}
            >
              <Typography
                variant="h3"
                sx={{ textAlign: "center", color: "white" }}
              >
                Login
              </Typography>

              <div
                style={{
                  margin: "10px",
                  position: "relative",
                  color: "white",
                  width: "100%",
                }}
              >
                <TextField
                  name="email"
                  label="Email"
                  {...getFieldProps("email")}
                  sx={{ width: "24vw" }}
                />
                {touched.email && errors.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </div>
              <div
                style={{ margin: "10px", position: "relative", color: "white" }}
              >
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  {...getFieldProps("password")}
                  sx={{ width: "100%" }}
                />
                {touched.password && errors.password ? (
                  <div className="error-message">{errors.password}</div>
                ) : null}
              </div>

              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>
              <Link
                style={{ textAlign: "center", color: "white" }}
                to="/signup"
              >
                Don't have an account?
              </Link>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
