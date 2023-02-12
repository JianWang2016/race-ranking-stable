import { withSSRContext } from "aws-amplify";
import { listRaces } from "@/src/graphql/queries";
import useSwR from "swr";
import ProcessData from "@/components/ProcessData";
import SortRankDisplay from "@/components/SortRankDisplay";

const fetcher = async () => {
  const SSR = withSSRContext();
  const response = await SSR.API.graphql({ query: listRaces });
  const data = response.data.listRaces.items;

  const augData = ProcessData(data);

  return augData;
};

export function useData() {
  const { data, error, isLoading } = useSwR("allRaceRawData", fetcher);

  return {
    data,
    error,
    isLoading,
  };
}

function AllRaces() {
  //const { data, error, isLoading } = useSwR("allRaceRawData", fetcher);

  const { data, error, isLoading } = useData();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <main>
        <SortRankDisplay gender="BOTH" ageGroup="all" data={data} />
      </main>
    </>
  );
}
export default AllRaces;
