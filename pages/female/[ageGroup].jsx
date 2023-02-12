import { useRouter } from "next/router";
import { FemaleAgeLinks } from "@/components/NavLinks";
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
      <div className="ml-4 mt-4 flex w-full justify-left md:w-auto">
          <nav className="flex gap-4">
            <FemaleAgeLinks />
          </nav>
        </div>
        <SortRankDisplay gender="F" ageGroup={ageGroup} data={data} />
      </main>
    </>
  );
}

export default AgeGroup;
