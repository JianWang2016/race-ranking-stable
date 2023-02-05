import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetMaleData } from "@/components/GetData2";
import { MaleAgeLinks } from "@/components/NavLinks";

function Male() {
  return (
    <>
      <main>
        <CallToAction field1="" field2="Rank 2022 Marathon Best Time - Male" />
        <div className="mt-4 flex w-full justify-center md:w-auto">
          <nav className="flex gap-8">
            <MaleAgeLinks />
          </nav>
        </div>
        <GetMaleData />
      </main>
    </>
  );
}

export default Male;
