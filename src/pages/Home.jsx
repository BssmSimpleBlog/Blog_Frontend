import React, { useEffect, useState } from "react";
import "./style.scss";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Post from "../components/Modals/Post";

const Home = () => {
  const history = useNavigate();

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      history("/");
    }
  }, [history]);

  return (
    <div className="home">
      <Header />
      <img
        src="../../img/pen.png"
        className="write"
        onClick={() => {
          setIsPostModalOpen(true);
        }}
      />

      {isPostModalOpen && (
        <Post
          onClose={() => {
            setIsPostModalOpen(false);
          }}
        />
      )}
      {/* TODO 글 작성되있는거 띄우기 */}
    </div>
  );
};

export default Home;
