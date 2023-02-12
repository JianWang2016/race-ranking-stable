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
        <div className="mt-4 flex w-full justify-center md:w-auto">
          <nav className="flex gap-8">
            <FemaleAgeLinks />
          </nav>
        </div>
        <SortRankDisplay gender="F" ageGroup="all" data={data} />
      </main>
    </>
  );
}

export default Female;
