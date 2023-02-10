import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { useDarkMode } from "./DarkMode";
import { AiFillYoutube } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const [user, setUser] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl mb-4">
      <Link to="/" className="flex items-center">
        <AiFillYoutube className="text-5xl text-brand" />
        <h1 className="text-3xl font-oswald">YouTube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none rounded-l-3xl bg-color-input border border-color-border"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-5 rounded-r-3xl text-color-text bg-color-button border border-color-border">
          <HiOutlineSearch />
        </button>
      </form>
      <div className="w-48 flex justify-end items-center mr-4 text-4xl">
        <FaUserCircle onClick={() => setUser(!user)} />
        {user ? (
          <div className="absolute top-16 bg-color-input border border-color-border rounded-2xl text-xl p-4">
            <p >내 채널</p>
            <p className="mt-4" onClick={toggleDarkMode}>
              기기 테마
            </p>
          </div>
        ) : (
          false
        )}
      </div>
    </header>
  );
}
