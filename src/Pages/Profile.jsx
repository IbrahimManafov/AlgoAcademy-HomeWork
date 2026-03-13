import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [active, setActive] = useState("");

  return (
    <div className="profileHead">
      <aside className="sidebar">
        <div className="avatar">
          <img src="https://avatars.githubusercontent.com/u/115017411?v=4"alt=""/>
        </div>

        <nav className="menu">
          <button onClick={() => setActive("profile")} className="menu-btn">Profile</button>
          <button onClick={() => setActive("settings")} className="menu-btn">Settings</button>
          <button onClick={() => setActive("contact")} className="menu-btn">Contact</button>
        </nav>

      </aside>


      {/* SALAM ZULFUGAR MUELLIM)) */}

      <main className="content">
        {active === "" && <div className="empty"></div>}

        {active === "profile" && (
          <div className="card">
            <h2>Profile</h2>
            <p>Name: Zulfuqar</p>
            <p>Age: 30</p>
            <p>Role: Boss Developer</p>
          </div>
        )}
        {active === "settings" && (
          <div className="card">
            <h2>Settings</h2>
            <p>Theme: Light</p>
            <p>Language: English</p>
            <p>Notifications: Enabled</p>
          </div>
        )}
        {active === "contact" && (
          <div className="card">
            <h2>Contact</h2>
            <p>Email: zulfugarbaratzade@gmail.com</p>
            <p>Phone: +994504603371</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;
