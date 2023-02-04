import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetMaleData } from "@/components/GetData2";

function Male() {
  return (
    <>
  
      <main>
        <CallToAction
          field1=""
          field2="Rank 2022 Marathon Best Time - Male"
        />

        <GetMaleData />
      </main>
    </>
  );
}

export default Male