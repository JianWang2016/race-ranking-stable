import RaceCreateForm from "@/src/ui-components/RaceCreateForm";
import { Amplify, DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { Race } from "@/src/models";
import moment from "moment/moment";
import DisplayData from "./DisplayData";

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
    item["name"] =
      item.firstName + item.middleName + item.middleName
        ? item.middleName
        : "" + item.lastName;

    let userDob = moment(item.dateOfBirth.toString());
    let age = moment().diff(userDob, "years");
    item["age"] = age;
    //item["age"] = age.toString();
  });

  //const subRace = myRace.filter((item) => item.gender === key);

  //sort based on finish time in seconds
  myRace.sort((a, b) => {
    return a.finishTimeInSecond - b.finishTimeInSecond;
  });

  // add the rank before returning
  return myRace.map((item, index) => ({ index, ...item }));
}

function AugmentData(myRace) {
  myRace.map((item) => {
    let h = item.finishHour * 3600;
    let m = item.finishMinute * 60;
    let s = item.finishSecond;
    item["finishTimeInSecond"] = h + m + s;
    let h_s = item.finishHour.toString();
    let m_s = item.finishMinute.toString();
    let s_s = item.finishSecond.toString();
    item["finishTime"] = h_s + ":" + m_s + ":" + s_s;

    // let name = "";
    // item.middleName
    //   ? (name = item.firstName + " " + item.middleName + " ")
    //   : name = item.firstName;
    // name = name + " " + item.lastName;

    item["name"] = item.firstName + " " + item.lastName;

    let userDob = moment(item.dateOfBirth.toString());
    let age = moment().diff(userDob, "years");
    item["age"] = age;
    //item["age"] = age.toString();
  });

  return myRace;
}

function sortRankData(myRace) {
  //sort based on finish time in seconds
  myRace.sort((a, b) => {
    return a.finishTimeInSecond - b.finishTimeInSecond;
  });

  // add the rank before returning
  return myRace.map((item, index) => ({ index, ...item }));
}

function sortRankMaleData(myRace) {
  myRace = myRace.filter((item) => item.gender === "MALE");

  //sort based on finish time in seconds
  myRace.sort((a, b) => {
    return a.finishTimeInSecond - b.finishTimeInSecond;
  });

  // add the rank before returning
  return myRace.map((item, index) => ({ index, ...item }));
}

function sortRankFemaleData(myRace) {
  myRace = myRace.filter((item) => item.gender === "FEMALE");

  //sort based on finish time in seconds
  myRace.sort((a, b) => {
    return a.finishTimeInSecond - b.finishTimeInSecond;
  });

  // add the rank before returning
  return myRace.map((item, index) => ({ index, ...item }));
}

export function GetData() {
  const rawData = GetRawData();
  const augData = ProcessData(rawData);
  const raceData = sortRankData(augData);

  return (
    <div className="container">
      <DisplayData data={raceData} />

      <ul>
        {raceData.map((item) => {
          return (
            <li key={item.id}>
              Rank {item.index + 1} -{item.firstName} {item.fullName} -{" "}
              {item.finishHour}:{item.finishMinute}:{item.finishSecond}-
              {item.age}
            </li>
          );
        })}
      </ul>
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

      <ul>
        {raceData.map((item) => {
          return (
            <li key={item.id}>
              Rank {item.index + 1} -{item.firstName} {item.fullName} -{" "}
              {item.finishHour}:{item.finishMinute}:{item.finishSecond}-
              {item.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function GetFemaleData() {
  const rawData = GetRawData();
  const augData = ProcessData(rawData);
  const raceData = sortRankFemaleData(augData);

  return (
    <div className="container">
      <DisplayData data={raceData} />

      <ul>
        {raceData.map((item) => {
          return (
            <li key={item.id}>
              Rank {item.index + 1} -{item.firstName} {item.fullName} -{" "}
              {item.finishHour}:{item.finishMinute}:{item.finishSecond}-
              {item.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
