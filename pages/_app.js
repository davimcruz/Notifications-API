import "../styles/globals.css"

import Head from "next/head";

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                <meta name="author" content="---" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content="---" />
                <link rel="shortcut icon" href="---" />
                <title>---</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;