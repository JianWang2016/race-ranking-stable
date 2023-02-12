import Head from "next/head";
import DataTable from "react-data-table-component";
import { useState, useMemo } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const all_columns = [
  {
    name: "Rank",
    selector: (row) => row.index + 1,
    sortable: false,
    width: "65px",
    compact: false,
  },
  {
    name: "Name",
    selector: (row) => row.runnerName,
    sortable: true,
    width: "80px",
    compact: true,
    wrap: true,
  },
  {
    name: "Time",
    selector: (row) => row.finishTime,
    sortable: false,
    width: "80px",
    compact: true,
  },
  {
    name: "G",
    selector: (row) => row.gender,
    sortable: true,
    width: "30px",
    compact: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
    width: "40px",
    compact: true,
  },
  {
    name: "Race Name",
    selector: (row) => row.raceName,
    sortable: true,
    wrap: true,
  },
];

const age_columns = [
  {
    name: "Rank",
    selector: (row) => row.index + 1,
    sortable: false,
    width: "65px",
    compact: false,
  },
  {
    name: "Name",
    selector: (row) => row.runnerName,
    sortable: true,
    width: "80px",
    compact: true,
    wrap: true,
  },
  {
    name: "Time",
    selector: (row) => row.finishTime,
    sortable: false,
    width: "80px",
    compact: true,
  },
  {
    name: "G",
    selector: (row) => row.gender,
    sortable: true,
    width: "30px",
    compact: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
    width: "40px",
    compact: true,
  },
  {
    name: "Age Group",
    selector: (row) => row.ageGroup,
    sortable: true,
    width: "80px",
    compact: true,
  },
  {
    name: "Race Name",
    selector: (row) => row.raceName,
    sortable: true,
    wrap: true,
  },
];

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// eslint-disable-next-line react/prop-types
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter by Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

function DisplayData({ data, ageColumn, title }) {
  let columns = all_columns;
  if (ageColumn == true) {
    columns = age_columns;
  }

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.runnerName &&
      item.runnerName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <>
      <div className="max-w-screen-sm justify-center overflow-hidden bg-white shadow sm:rounded-lg">
        <DataTable
          title={title}
          dense
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
          responsive
          highlightOnHover
          striped
          noDataComponent="No record in this category"
          columns={columns}
          data={filteredItems}
        />
      </div>
    </>
  );
}

export default DisplayData;
