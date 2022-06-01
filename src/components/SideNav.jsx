import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../styles/sidebar.css";
import logo from "../assets/spotify_white.png";

const SideNav = () => {
  const [selected, setSelected] = useState("Home");
  let h = useHistory();
  // const handleChange = async (value) => {
  //   await setSearch(value);
  //   if (search.length > 2) {
  //     x(value);
  //   }
  // };

  // const x = (v) => {
  //   h.push(`/search/${v}`);
  // };

  return (
    <div className="sidebarcon">
      <img src={logo} className="spotify-logo" alt="spotify logo" />
      <Link
        onClick={() => setSelected("Home")}
        to="/"
        className={selected === "Home"?"sidebar-link-container selected-link":"sidebar-link-container"}
      >
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
            fill="currentColor"
          ></path>
        </svg>
        <h2 className="sidebar-text">Home</h2>
      </Link>
      <Link
        onClick={() => setSelected("Search")}
        to="/search"
        className={selected === "Search"?"sidebar-link-container selected-link":"sidebar-link-container"}
      >
        <svg
          className="me-md-2"
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
        <h2 className="sidebar-text">Search</h2>
      </Link>
      <Link
        onClick={() => setSelected("Library")}
        to="/library"
        className={selected === "Library"?"sidebar-link-container selected-link":"sidebar-link-container"}
      >
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
            fill="currentColor"
          ></path>
        </svg>
        <h2 className="sidebar-text">Your Library</h2>
      </Link>
      <hr className="sidehr" />
    </div>
  );
};

export default SideNav;
