import { MaleAgeLinks } from "@/components/NavLinks";
import { useData } from "..";
import SortRankDisplay from "@/components/SortRankDisplay";

function Male() {
  const { data, error, isLoading } = useData();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <main>
        <div className="ml-4 mt-4 flex w-full justify-left md:w-auto">
          <nav className="flex gap-4">
            <MaleAgeLinks />
          </nav>
        </div>
        <SortRankDisplay gender="M" ageGroup="all" data={data} />
      </main>
    </>
  );
}

export default Male;
