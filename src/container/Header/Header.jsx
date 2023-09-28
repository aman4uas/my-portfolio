import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import { data } from "../../constants";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const Header = () => {
  let headlinesData = [];
  const headlines = data.HOME.headlines;
  for (let i = 0; i < headlines.length; i++) {
    headlinesData.push(headlines[i]);
    headlinesData.push(2000);
  }
  //const IMG_URL ="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000";
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        class="left_portion"
      >
        <p>Aman Singh👋</p>
        <p>
          I am a <br className="line_break" />
          <TypeAnimation
            sequence={headlinesData}
            wrapper="span"
            speed={20}
            deletionSpeed={40}
            style={{ display: "inline-block" }}
            className="variable-text"
            repeat={Infinity}
          />
        </p>
        <p>{data.HOME.description}</p>
        <a href="#contact" className="button button--flex">
          <span className="btn_content">Hire me</span>
          {/* <svg
            class="button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
              fill="#fff"
            ></path>
            <path
              d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
              fill="#fff"
            ></path>
          </svg> */}
        </a>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="right_portion"
        style={{ backgroundImage: `url(${data.HOME.img_url})` }}
      ></motion.div>
      <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
          <svg
            width="32px"
            height="32px"
            class="home__scroll-mouse"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            }}
          >
            <path
              class="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: "hsl(0, 0%, 20%)",
                strokeWidth: "20px",
              }}
            ></path>
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: "hsl(0, 0%, 20%)",
                strokeWidth: "20px",
              }}
            ></path>
          </svg>
          <span className="home__scroll-name">Scroll Down</span>
          <HiOutlineArrowSmDown className="home__scroll-arrow" />
        </a>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");

/* 
.profile__img {
  background: url(../../assets//profileBW.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgba(225, 225, 225, .4);
  order: 1;
  justify-self: center;
  width: 80vw;
    height: 80vw;
  
  animation: profile__animate 8s ease-in-out infinite 0s;

  @media screen and (min-width: 450px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: 2000px) {
    width: 450px;
    height: 450px;
  }
}

@keyframes profile__animate {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}
*/
