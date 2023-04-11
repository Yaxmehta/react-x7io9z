import React from 'react';
import loginImage from '../images/1673516409695.jpeg';
import background from '../images/PosterImage.png';

const Login = () => {
  return (
    <>
      <section>
        <div class="container mt-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-6">
              <div class="card">
                <div
                  class="card-body"
                  style={{
                    backgroundImage: `url(${background})`,
                    width: '562px',
                  }}
                >
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="mb-3 form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Always Remember Me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <img src={loginImage} style={{ width: '300px' }} alt="..."></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
