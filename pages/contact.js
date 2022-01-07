// @ts-nocheck
import Circle from "../components/Circle";
import styles from "../styles/Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="green" left="-40vh" top="-20vh" />
            <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
            <h1 className={styles.title}>GET IN TOUCH</h1>
            <form action="" className={styles.form}>
                <input
                    // type="text"
                    className={styles.inputS}
                    placeholder="Username"
                />
                <input
                    // type="text"
                    className={styles.inputS}
                    placeholder="Phone"
                />
                <input
                    // type="text"
                    className={styles.inputL}
                    placeholder="Email"
                />
                <input
                    // type="text"
                    className={styles.inputL}
                    placeholder="Subject"
                />
                <textarea
                    className={styles.textarea}
                    placeholder="Message"
                    rows={5}
                />
                <button className={styles.button}>SUBMIT</button>
            </form>
        </div>
    );
};

export default Contact;
