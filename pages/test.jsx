import React, { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [runDate, setRunDate] = useState('');
  const [runTime, setRunTime] = useState('');
  const [review, setReview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <h1>Form Submitted!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {review && (
        <>
          <h2>Review Form</h2>
          <p>First Name: {firstName}</p>
          <p>Run Date: {runDate}</p>
          <p>Run Time: {runTime}</p>
          <button onClick={() => setReview(false)}>Edit</button>
        </>
      )}
      {!review && (
        <>
          <h2>Enter Form Data</h2>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <br />
          <label>
            Run Date:
            <input type="date" value={runDate} onChange={(e) => setRunDate(e.target.value)} />
          </label>
          <br />
          <label>
            Run Time:
            <input type="time" value={runTime} onChange={(e) => setRunTime(e.target.value)} />
          </label>
          <br />
          <button onClick={() => setReview(true)}>Review</button>
        </>
      )}
      {review && (
        <button type="submit">Submit</button>
      )}
    </form>
  );
}

export default Form;
