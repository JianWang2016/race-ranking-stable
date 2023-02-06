import { useRouter } from "next/router";
import { MaleAgeLinks } from "@/components/NavLinks";
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
          field2={`2022 Marathon Best Time - Male Age Group ${ageGroup}`}
        />
        <div className="mt-4 flex w-full justify-center md:w-auto">
          <nav className="flex gap-8">
            <MaleAgeLinks />
          </nav>
        </div>
        <GetData gender="MALE" ageGroup={ ageGroup } />
      </main>
    </>
  );
}

export default AgeGroup;
