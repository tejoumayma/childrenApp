import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/spinner";
import { login, reset } from "../features/auth/authUser/authUserSlice";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.authUser
  );

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
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
        <section
          className="h-100 gradient-form"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">
                        <div className="text-center">
                          <h4 className="mt-1 mb-5 pb-1">
                            Please login to your account
                          </h4>
                        </div>

                        <form onSubmit={onSubmit}>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={onChange}
                              id="email"
                              className="form-control"
                              placeholder="email address"
                            />
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={onChange}
                              id="password"
                              className="form-control"
                              placeholder="password"
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="button"
                            >
                              LogIn
                            </button>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              <Link to="/registerUser">Create new</Link>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default Login;
