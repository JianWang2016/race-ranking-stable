import RaceCreateForm from "@/src/ui-components/RaceCreateForm";
import { Container } from "@/components/Container";
import { CircleBackground } from "@/components/CircleBackground";
import React, { useState, useEffect } from "react";
import { CallToAction } from "@/components/CallToAction";
import { EntrySuccess2 } from "@/components/EntrySuccess";

function Entry() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
    
      <CallToAction
        field1="Share your race time"
        field2="It only takes 90 seconds to get your bragging right"
      />

      <div className="container">
        {showForm ? (
          <RaceCreateForm
            onSuccess={() => {
              setShowForm(false);
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
