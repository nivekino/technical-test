import "./App.css";
import { Formik, Form, Field } from "formik";

function App() { 
  const validateNumber = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length < 10) {
      error = "* Must be 8 digits";
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length < 8) {
      error = "* Must be 8 characters";
    }
    return error;
  };

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length < 8) {
      error = "* Invalid Username";
    }
    return error;
  };

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "* Invalid email address";
    }
    return error;
  }

  return (
    <div className="App ">
      <h2 className="title-form">Create a User</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          number: "",
        }}
        onSubmit={(values) => {
          alert("Complete");
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form onSubmit={Formik.handleSubmit}>
            <div className="formulary">
              <div className="div-default2">
                <div className="div-default">
                  <label className="label label-default">UserName:</label>
                  <Field
                    type="text"
                    name="name"
                    className="input-default"
                    placeholder="Name"
                    validate={validateName}
                  />
                </div>
                {errors.name && touched.name ? (
                  <div className="message-error">{errors.name}</div>
                ) : null}
              </div>

              <div className="div-default2">
                <div className="div-default">
                  <label className="label label-default">Password:</label>
                  <Field
                    type="password"
                    name="password"
                    className="input-default"
                    placeholder="Password"
                    validate={validatePassword}
                  />
                </div>
                {errors.password && touched.password ? (
                  <div className="message-error">{errors.password}</div>
                ) : null}
              </div>

              <div className="div-default2">
                <div className="div-default">
                  <label className="label label-default">Email:</label>
                  <Field
                    type="email"
                    name="email"
                    className="input-default"
                    placeholder="Email"
                    validate={validateEmail}
                  />
                </div>

                {errors.email && touched.email && (
                  <div className="message-error">{errors.email}</div>
                )}
              </div>

              <div className="div-default2">
                <div className="div-default">
                  <label className="label label-default">Number:</label>
                  <Field
                    type="number"
                    name="number"
                    className="input-default"
                    placeholder="Number"
                    validate={validateNumber}
                  />
                </div>
                {errors.number && touched.number ? (
                  <div className="message-error">{errors.number}</div>
                ) : null}
              </div>

              <div className="div-default2">
                <button type="submit" className="btn-submit">
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
