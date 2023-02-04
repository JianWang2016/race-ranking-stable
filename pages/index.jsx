import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetData } from "@/components/GetData2";
import { Disclosure } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <main>
        <CallToAction
          field1=""
          field2="Rank 2022 Marathon Best Time - All"
        />

        <GetData />
      </main>
    </>
  );
}
