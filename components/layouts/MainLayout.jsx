import Head from "next/head";
import { NavBar } from "../NavBar";
import styles from './layout.module.css'


export const MainLayout = ({children}) => {
    return(
        <div className={styles.container}>
            <Head>
                <title>Edgar - App</title>
                <meta name="description" content="About Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>

                    { children }

            </main>
        </div>
        );
    }
