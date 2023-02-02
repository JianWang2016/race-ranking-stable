import RaceCreateForm from "@/src/ui-components/RaceCreateForm";
import { Container } from "@/components/Container";
import { CircleBackground } from "@/components/CircleBackground";
import React, { useState, useEffect } from "react";
import { EntrySuccess } from "@/components/EntrySuccess";

function Entry() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <section
        id="get-free-shares-today"
        className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
      >
        <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
          <CircleBackground color="green" className="animate-spin-slower" />
        </div>
        <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
          <CircleBackground color="blue" className="animate-spin-slower" />
        </div>
        <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
          <CircleBackground color="red" className="animate-spin-slower" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-md sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Share your race time with fellow runners ...
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              It takes 90 seconds to get your ranking!
            </p>
          </div>
        </Container>
      </section>

      <div className="container">
        {showForm ? (
          <RaceCreateForm
            onSuccess={() => {
              setShowForm(false);
            }}
          />
        ) : (
          <EntrySuccess />
        )}
      </div>
    </>
  );
}

export default Entry;
