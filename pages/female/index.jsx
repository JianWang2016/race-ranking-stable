import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { GetData } from "@/components/GetData";
import { FemaleAgeLinks } from "@/components/NavLinks";

function Female() {
  return (
    <>
      <main>
        <CallToAction
          field1=""
          field2="Rank 2022 Marathon Best Time - Female"
        />

        <div className="mt-4 flex w-full justify-center md:w-auto">
          <nav className="flex gap-8">
            < FemaleAgeLinks  />
          </nav>
        </div>

        <GetData gender="FEMALE" ageGroup="all" />
      </main>
    </>
  );
}

export default Female;
