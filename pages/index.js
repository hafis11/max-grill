import Head from "next/head";
import MenuIndex from "../components/menu";

export default function Home() {
  return (
    <div
      class="h-screen bg-black">
      <Head>
        <title>MAX GRILL MENU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuIndex />
    </div>
  );
}
