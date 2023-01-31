import Head from "next/head";

export default function Main() {
    return (
        <>
            <Head>
                <title>IP</title>
                <meta property="og:image" content="/api/ip" />
                <meta
                    httpEquiv="refresh"
                    content="0; url=https://simondmc.com"
                />
            </Head>
        </>
    );
}
