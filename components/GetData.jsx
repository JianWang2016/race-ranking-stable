import RaceCreateForm from "@/src/ui-components/RaceCreateForm";
import { Amplify, DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { Race } from "@/src/models";
import moment from "moment/moment";

function GetData() {
  const [race, setRace] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await DataStore.observeQuery(Race).subscribe(({ items }) => {

        setRace(items);
      });

  
    }
    
    getData();
  });
  return (
    <div className="container">
      <ul>
        {race.map((item) => {
          return (
            <li key={item.id}>
              {item.firstName} {item.lastName} - {item.finishHour}:
              {item.finishMinute}:{item.finishSecond}
              {item.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GetData;
