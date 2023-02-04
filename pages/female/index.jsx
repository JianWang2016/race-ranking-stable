import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetFemaleData } from "@/components/GetData2";

function Female() {
  return (
    <>

      <main>
        <CallToAction
          field1=""
          field2="Rank 2022 Marathon Best Time - Female"
        />

        <GetFemaleData />
      </main>
    </>
  );
}

export default Female;
