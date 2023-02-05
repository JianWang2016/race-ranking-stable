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
  } else if ((age >= 18) & (age < 29)) {
    ageGroup = "18-29";
  } else if ((age >= 30) & (age < 39)) {
    ageGroup = "30-39";
  } else if ((age >= 40) & (age < 49)) {
    ageGroup = "40-49";
  } else if ((age >= 50) & (age < 59)) {
    ageGroup = "50-59";
  } else if ((age >= 60) & (age < 69)) {
    ageGroup = "60-69";
  } else if ((age >= 70) & (age < 79)) {
    ageGroup = "70-79";
  } else if ((age >= 80) & (age < 89)) {
    ageGroup = "80-89";
  } else ageGroup = "90+";

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
  //const subRace = myRace.filter((item) => item.gender === key);

  //sort based on finish time in seconds
  // myRace.sort((a, b) => {
  //   return a.finishTimeInSecond - b.finishTimeInSecond;
  // });

  // // add the rank before returning
  // return myRace.map((item, index) => ({ index, ...item }));
}

function sortRankData(myRace) {
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

function sortRankMaleData(myRace) {
  myRace = myRace.filter((item) => item.gender === "MALE");

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

function sortRankFemaleData(myRace) {
  myRace = myRace.filter((item) => item.gender === "FEMALE");

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

export function GetData() {
  const rawData = GetRawData();
  const augData = ProcessData(rawData);
  const raceData = sortRankData(augData);

  return (
    <div className="container">
      <DisplayData data={raceData} />
    </div>
  );
}

export function GetMaleData() {
  const rawData = GetRawData();
  const augData = ProcessData(rawData);
  const raceData = sortRankMaleData(augData);

  return (
    <div className="container">
      <DisplayData data={raceData} />
    </div>
  );
}

export function GetFemaleData() {
  const rawData = GetRawData();
  const augData = ProcessData(rawData);
  const raceData = sortRankFemaleData(augData, "FEMALE");

  return (
    <div className="container">
      <DisplayData data={raceData} />
    </div>
  );
}
