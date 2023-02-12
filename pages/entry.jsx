import RaceCreateForm from "@/src/ui-components/RaceCreateForm";
import { Container } from "react-dom";
import React, { useState, useEffect } from "react";
import { EntrySuccess2 } from "@/components/EntrySuccess";

function Entry() {
  const [showForm, setShowForm] = useState(true);

  const finishTimeOverrides = {};

  return (
    <>
      <div className="max-w-screen-sm justify-center overflow-hidden bg-white shadow sm:rounded-lg">
        {showForm ? (
          <RaceCreateForm
            overrides={{
              gender: { labelPosition: "top", direction: "row" },
              raceDate: { min: "2022-01-01", max: "2022-12-31" },
            }}
            onSuccess={() => {
              setShowForm(false);
            }}
            onValidate={{
              raceDate: (value, validationResponse) => {
                const [year, month, day] = value.split("-").map(Number);
                if (year !== 2022) {
                  return {
                    hasError: true,
                    errorMessage:
                      "Please enter your best finish time in a 2022 race.",
                  };
                }
                return validationResponse;
              },
              finishTime: (value, validationResponse) => {
                const regex = /^[0-9]:[0-5]\d:[0-5]\d$/;
                if (!regex.test(value)) {
                  return {
                    hasError: true,
                    errorMessage:
                      "Finish time should be in the format of h:mm:ss such as 4:10:25",
                  };
                }
                return validationResponse;
              },
            }}
          />
        ) : (
          <EntrySuccess2 />
        )}
      </div>
    </>
  );
}

export default Entry;
