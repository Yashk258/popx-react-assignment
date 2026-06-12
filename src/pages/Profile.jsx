import { FaCamera } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
function Profile() {
  return (
    <div className="app-container">
      <div className="mobile-frame profile-frame">
        <div className="profile-header">
          <h3>Account Settings</h3>
        </div>

        <div className="profile-content">
          <div className="profile-top">
            <div className="profile-image-wrapper">
              <img
                src={profileImg}
                alt="Profile"
              />

              <div className="camera-icon">
                <FaCamera />
              </div>
            </div>

            <div>
              <h4 className="profile-name">Marry Doe</h4>
              <p className="profile-email">
                MarryDoe@gmail.com
              </p>
            </div>
          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur
            Sadipscing Elitr, Sed Diam Nonumy Eirmod
            Tempor Invidunt Ut Labore Et Dolore Magna
            Aliquyam Erat, Sed Diam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;