import All from "../../imports";
import styles from "../../styles/posts.module.css";
import stylesSCSS from "../../styles/gposts.module.scss";

export default function FirstPost() {
    return (
    <>
        <h1 className={styles.bigblue}>First Post</h1>
        <h2>
            <All.Link href="/">
               <a>Back to home!</a>
            </All.Link>
        </h2>
        <All.GarageComp />

        <h2 className={stylesSCSS.bigGreen}>SCSS Style</h2>
    </>
    )
}