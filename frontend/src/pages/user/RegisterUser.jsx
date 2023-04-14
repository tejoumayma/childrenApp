import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import { register, reset } from "../../features/auth/authUser/authUserSlice";

function RegisterUser() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    childName: " ",
    childSex: " ",
  });
  const { fullname, email, password, phone, childName, childSex } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.authUser
  );

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { fullname, email, password, phone, childName, childSex };
    dispatch(register(userData));
  };

  useEffect(() => {
    if (isError) {
      const messages = message.split("\n");
      messages.forEach((message) => {
        toast.error(message);
      });
    }

    if (isSuccess || user) {
      navigate("/dashboardUser");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) return <Spinner />;

  return (
    !user && (
      <div>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div
                  className="card shadow-2-strong card-registration"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Sign Up</h3>
                    <form onSubmit={onSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="fullname"
                              name="fullname"
                              value={fullname}
                              onChange={onChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="fullname">
                              Full Name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="chilName"
                              name="childName"
                              value={childName}
                              onChange={onChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="childName">
                              Child Name
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                          <div className="form-outline datepicker w-100">
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={onChange}
                              className="form-control form-control-lg"
                              id="password"
                            />
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <h6 className="mb-2 pb-1">Child Gender: </h6>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="girlGender"
                              value="option1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="girlGender"
                            >
                              Girl
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="boyGender"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="boyGender"
                            >
                              Boy
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={email}
                              onChange={onChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={phone}
                              onChange={onChange}
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="phone">
                              Phone Number
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="mt-4 pt-2">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          value="register"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}
export default RegisterUser;
