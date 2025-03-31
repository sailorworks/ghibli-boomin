import Image from "next/image";
import React from "react";

import styles from "./SidebarLogo.module.scss";

const SidebarLogo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
      <span>Music Player</span>
    </div>
  );
};

export default SidebarLogo;
