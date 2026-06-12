import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid =
    email.trim() !== "" &&
    password.trim() !== "";

  const handleLogin = () => {
    if (isFormValid) {
      navigate("/profile");
    }
  };

  return (
    <div className="app-container">
      <div className="mobile-frame login-frame">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button
          className={`login-btn ${
            isFormValid
              ? "login-btn-active"
              : ""
          }`}
          disabled={!isFormValid}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;