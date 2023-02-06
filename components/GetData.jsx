import RaceCreateForm from "@/src/ui-components/RaceCreateForm";
import { Amplify, DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { Race } from "@/src/models";
import moment from "moment/moment";
import DisplayData from "./DisplayData";

function getAgeGroup(age) {
  let ageGroup = "";

  if (age < 18) {
    ageGroup = "<18";
  } else if ((age >= 18) & (age <= 29)) {
    ageGroup = "18-29";
  } else if ((age >= 30) & (age <= 39)) {
    ageGroup = "30-39";
  } else if ((age >= 40) & (age <= 49)) {
    ageGroup = "40-49";
  } else if ((age >= 50) & (age <= 59)) {
    ageGroup = "50-59";
  } else if ((age >= 60) & (age <= 69)) {
    ageGroup = "60-69";
  } else if ((age >= 70) & (age <= 79)) {
    ageGroup = "70-79";
  } else if ((age >= 80) & (age <= 89)) {
    ageGroup = "80-89";
  } else ageGroup = "90-100";

  return ageGroup;
}

function GetRawData() {
  const [race, setRace] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await DataStore.observeQuery(Race).subscribe(({ items }) => {
        setRace(items);
      });
    };
    getData();
  });
  return race.map((item) => ({
    ...item,
  }));
}

function ProcessData(myRace) {
  myRace.map((item) => {
    let h = item.finishHour * 3600;
    let m = item.finishMinute * 60;
    let s = item.finishSecond;
    item["finishTimeInSecond"] = h + m + s;
    let h_s = item.finishHour.toString();
    let m_s = item.finishMinute.toString();
    let s_s = item.finishSecond.toString();
    item["finishTime"] = h_s + ":" + m_s + ":" + s_s;

    let middleName = item.middleName ? item.middleName + " " : "";
    let runnerName = item.firstName + " " + middleName + item.lastName;
    item["runnerName"] = runnerName;

    let userDob = moment(item.dateOfBirth.toString());
    let age = moment().diff(userDob, "years");
    item["age"] = age;
    let ageGroup = getAgeGroup(age);
    item["ageGroup"] = ageGroup;
  });

  return myRace;
}

function sortRankData(myRace, gender, ageGroup) {
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

export const GetData = ({ gender, ageGroup }) => {
  const rawData = GetRawData();
  const augData = ProcessData(rawData);
  const raceData = sortRankData(augData, gender, ageGroup);

  let ageColumn = false
  if (ageGroup != 'all') {
     ageColumn = true
  }

  return (
    <div className="container">
      <DisplayData data={raceData} ageColumn={ageColumn}  />
    </div>
  );
};
