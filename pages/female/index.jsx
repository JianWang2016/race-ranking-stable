import { FemaleAgeLinks } from "@/components/NavLinks";
import { useData } from "..";
import SortRankDisplay from "@/components/SortRankDisplay";

function Female() {
  const { data, error, isLoading } = useData();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <main>
        <div className="justify-left ml-4 mt-4 flex w-full md:w-auto">
          <nav className="flex gap-4">
            <FemaleAgeLinks />
          </nav>
        </div>
        <SortRankDisplay gender="F" ageGroup="all" data={data} />
      </main>
    </>
  );
}

export default Female;
