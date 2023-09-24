import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function Welcome() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div>
        <h1>Linsk</h1>
        <Image height={144} width={144} src="/images/profile.jpg" />
        <ul>
          <Link href="/posts/first-post">first-post</Link>
        </ul>
      </div>
    </>
  );
}
