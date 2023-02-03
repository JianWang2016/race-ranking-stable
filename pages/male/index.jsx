import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetMaleData } from "@/components/GetData2";

function Male() {
  return (
    <>
      <Head>
        <title>Race Ranking.</title>
        <meta name="description" content="Rank marathon race performance." />
      </Head>

      <main>
        <CallToAction
          field1="Marathon Ranking"
          field2="Rank 2022 Marathon Best Time - Male"
        />

        <GetMaleData />
      </main>
    </>
  );
}

export default Male