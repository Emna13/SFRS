import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../js/actions";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      {localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <div className="view">
          <ul class="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <p class="nav-primary active">Login</p>
            </li>
          </ul>

          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login"
            >
              <form>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="loginName"
                    class="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label class="form-label" for="loginName">
                    Email
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label class="form-label" for="loginPassword">
                    Mot de passe
                  </label>
                </div>

                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <div class="form-check mb-3 mb-md-0">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                        checked
                      />
                      <label class="form-check-label" for="loginCheck">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary btn-block mb-4"
                  onClick={loginUser}
                >
                  Sign in
                </button>

                <div class="text-center">
                  <p>
                    Not a member? <a href="/register">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Login;
