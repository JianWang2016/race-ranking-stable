import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetFemaleData } from "@/components/GetData2";

function Female() {
  return (
    <>
      <Head>
        <title>Race Ranking.</title>
        <meta name="description" content="Rank marathon race performance." />
      </Head>

      <main>
        <CallToAction
          field1="Marathon Ranking"
          field2="Rank 2022 Marathon Best Time - Female"
        />

        <GetFemaleData />
      </main>
    </>
  );
}

export default Female;
