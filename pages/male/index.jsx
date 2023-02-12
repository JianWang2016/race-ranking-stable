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
        <div className="mt-4 flex w-full justify-center md:w-auto">
          <nav className="flex gap-8">
            <MaleAgeLinks />
          </nav>
        </div>
        <SortRankDisplay gender="M" ageGroup="all" data={data} />
      </main>
    </>
  );
}

export default Male;
