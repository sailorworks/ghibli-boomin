import Image from "next/image";
import React from "react";

import styles from "./NotFound.module.scss";

const NotFound = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["not-found"]}>
      <Image
        className={`${styles.img} dark-image`}
        src="/images/not-found.svg"
        width={90}
        height={90}
        loading="lazy"
        alt="not found image"
      />
      {children}
    </div>
  );
};

export default NotFound;
