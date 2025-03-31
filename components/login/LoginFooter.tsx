import Image from "next/image";
import React from "react";

import styles from "./LoginFooter.module.scss";

const LoginFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.divider}>
        <span>or</span>
      </div>
      <div className={styles.social}>
        <button className={styles.button}>
          <Image src="/images/google.svg" alt="google" width={24} height={24} />
          <span>Continue with Google</span>
        </button>
        <button className={styles.button}>
          <Image
            src="/images/facebook.svg"
            alt="facebook"
            width={24}
            height={24}
          />
          <span>Continue with Facebook</span>
        </button>
        <button className={styles.button}>
          <Image src="/images/github.svg" alt="github" width={24} height={24} />
          <span>Continue with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default LoginFooter;
