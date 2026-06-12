import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/profile");
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
          />
        </div>

        <div className="form-group">
          <label>Phone number*</label>
          <input
            type="text"
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label>Email address*</label>
          <input
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input
            type="text"
            placeholder="Enter company name"
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