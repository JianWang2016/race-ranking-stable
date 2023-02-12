import { useRouter } from "next/router";
import { MaleAgeLinks } from "@/components/NavLinks";
import { useData } from "..";
import SortRankDisplay from "@/components/SortRankDisplay";

function AgeGroup() {
  const router = useRouter();
  const { ageGroup } = router.query;
  const { data, error, isLoading } = useData();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <main>
        <div className="mt-4 flex w-full justify-center md:w-auto">
          <nav className="flex gap-8">
            <MaleAgeLinks />
          </nav>
        </div>
        <SortRankDisplay gender="M" ageGroup={ageGroup} data={data} />
      </main>
    </>
  );



}

export default AgeGroup;
