import Head from "next/head";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Rank",
    selector: (row) => row.index + 1,
    sortable: false,
  },
  {
    name: "Name",
    selector: (row) => row.firstName + " " + row.lastName,
    sortable: true,
  },
  {
    name: "Finish Time",
    selector: (row) => row.finishTime,
    sortable: false,
  },
  // {
  //   name: "Finish Sec",
  //   selector: (row) => row.finishTimeInSecond,
  //   sortable: true,
  // },
  {
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
  },
  {
    name: "Race Name",
    selector: (row) => row.raceName,
    sortable: true,
  },
];

function DisplayData({ data }) {
  return (
    <>
      <Head>
        <title>Marathon Ranking | Home</title>
        <meta name="keywords" content="Ranking Marathon Finishing Time - All" />
      </Head>
      <div>
        <h1>All Runner Finish Time Ranking</h1>
        <DataTable dense pagination columns={columns} data={data} />
      </div>
    </>
  );
}

export default DisplayData;
