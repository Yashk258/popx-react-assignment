import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10 digit number";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/profile");
    }
  };

  return (
    <div className="app-container">
      <div className="mobile-frame signup-frame">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="form-group">
          <label>Full Name*</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <span className="error-text">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Phone number*</label>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && (
            <span className="error-text">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Email address*</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="error-text">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="error-text">
              {errors.password}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input
            type="text"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="agency-group">
          <p>Are you an Agency?*</p>

          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                defaultChecked
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
              />
              No
            </label>
          </div>
        </div>

        <button
          className="primary-btn signup-btn"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;