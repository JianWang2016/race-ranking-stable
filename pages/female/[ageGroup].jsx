import { useRouter } from "next/router";
import { FemaleAgeLinks } from "@/components/NavLinks";
import { CallToAction } from "@/components/CallToAction";
import { GetData } from "@/components/GetData";

function AgeGroup() {
  const router = useRouter();
  const { ageGroup } = router.query;

  return (
    <>
      <main>
        <CallToAction
          field1=""
          field2={`2022 Marathon Best Time - Female Age Group ${ageGroup}`}
        />
        <div className="mt-4 flex w-full justify-center md:w-auto">
          <nav className="flex gap-8">
            <FemaleAgeLinks />
          </nav>
        </div>
        <GetData gender="FEMALE" ageGroup={ageGroup} />
      </main>
    </>
  );
}

export default AgeGroup;
