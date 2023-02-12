// import RaceCreateForm from "@/src/ui-components/RaceCreateForm";
// import { Amplify, DataStore } from "aws-amplify";
// import { useEffect, useState } from "react";
// import { Race } from "@/src/models";
// import moment from "moment/moment";
import DisplayData from "./DisplayData";

function sortRankData(gender, ageGroup, myRace) {
  if (gender != "BOTH") {
    myRace = myRace.filter((item) => item.gender === gender);
  }

  if (ageGroup != "all") {
    let arr = String(ageGroup).split("-");
    let age1 = parseInt(arr[0]);
    let age2 = parseInt(arr[1]);

    myRace = myRace.filter((item) => (item.age >= age1) & (item.age <= age2));
  }

  //sort based on finish time in seconds
  myRace.sort((a, b) => {
    return a.finishTimeInSecond - b.finishTimeInSecond;
  });

  // add the rank before returning
  let i = 0;
  return myRace.map((item) => {
    item.index = i;
    i++;
    return item;
  });
}

const SortRankDisplay = ({ gender, ageGroup, data }) => {
  //data is already augmented
  const raceData = sortRankData(gender, ageGroup, data);

  let title = "All ";
  if (gender != "Both") {
    if (gender == "M") {
      title = "Male ";
    } else if (gender == "F") {
      title = "Female ";
    }
  }

  let ageColumn = false;
  if (ageGroup != "all") {
    ageColumn = true;
    title = title + " " + ageGroup + " Age Group";
  }

  title = title + " Ranking";

  return (
    <div className="container">
      <DisplayData data={raceData} ageColumn={ageColumn} title={title} />
    </div>
  );
};

export default SortRankDisplay;
