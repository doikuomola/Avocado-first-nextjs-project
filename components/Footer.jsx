// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carL}>
                <h1 className={styles.title}>AVOCADO CREATIVES.</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" passHref>
                        <a>
                            <span className={styles.linkText}>WORK WITH US</span>
                            <Image
                                src="/img/link.png"
                                alt="link"
                                width="40px"
                                height="40px"
                            />
                        </a>
                    </Link>
                </h1>
            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    16 CHECK STREET, LAGOS <br />
                    NIGERIA
                </div>
                <div className={styles.cardItem}>
                    CONTACT@DAVID.DEV <br />
                    +234 7064444678
                </div>
            </div>
            <div className={styles.carS}>
                <div className={styles.cardItem}>
                    FOLLOW US: <br />
                    __FB __IN __BE __TW
                </div>

                <div className={styles.cardItem}>
                    © 2022 DAVID INTERACTIVE
                    <br />
                    ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    );
};

export default Footer;
