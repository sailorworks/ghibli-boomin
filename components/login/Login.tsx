"use client";
import { useState } from "react";

import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";

import styles from "./Login.module.scss";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const changeLoginClickHandler = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>{isLogin ? "Login" : "Register"}</h1>
          <button className={styles.link} onClick={changeLoginClickHandler}>
            {isLogin ? "Register Now" : "Login Now"}
          </button>
        </div>
        <LoginForm isLogin={isLogin} onSubmitForm={() => {}} loading={false} />
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
