import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetData } from "@/components/GetData2";
import { Disclosure } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Race Ranking.</title>
        <meta name="description" content="Rank marathon race performance." />
      </Head>

      <main>
        <CallToAction
          field1="Marathon Ranking"
          field2="Rank 2022 Marathon Best Time - All"
        />

        <GetData />
      </main>
    </>
  );
}
