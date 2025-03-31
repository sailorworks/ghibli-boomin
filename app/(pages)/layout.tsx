import Image from "next/image";
import React from "react";

import styles from "./layout.module.scss";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className={styles.img}>
        <Image
          src="/images/artists-background.svg"
          width={1920}
          height={1080}
          loading="eager"
          alt="artists page background"
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PagesLayout;
