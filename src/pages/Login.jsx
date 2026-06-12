import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="mobile-frame login-frame">
        <h1>Signin to your PopX account</h1>

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
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/profile")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;