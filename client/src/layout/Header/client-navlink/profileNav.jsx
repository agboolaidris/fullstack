import React from "react";
import { useDispatch } from "react-redux";

//action middleware
import { logout } from "../../../redux/action/auth";
import { clearUserProfile } from "../../../redux/action/profile";

//import static file
import user from "../../../assets/img/user.svg";

function ProfileNav({ toggleDropdown, setharmburger }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setharmburger(false);
    dispatch(logout());
    dispatch(clearUserProfile());
  };

  return (
    <ul className={toggleDropdown ? "sub-menu sub-menu-show" : "sub-menu"}>
      <li className="user-info">
        <img src={user} alt="" />
        <div>
          <p>Idris I Agboola</p>

          <p>Software Developer</p>
        </div>
      </li>

      <li className="view-profile-link" onClick={() => setharmburger(false)}>
        <a hfef="#">View Profile</a>
      </li>
      <div className="underline"></div>
      <li className="logout" onClick={handleLogout}>
        Sign out
      </li>
    </ul>
  );
}

export default ProfileNav;
