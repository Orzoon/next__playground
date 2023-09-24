import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>first-post</title>
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(
                `script loaded correctly, window.FB has been populated`
              )
            }
          />
        </Head>
        <div>
          <h1>first post</h1>
          <a href="/">Back to home</a>
        </div>
      </Layout>
    </>
  );
}
