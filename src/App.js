import React from 'react';
import './App.css';
import photoData from './data.json';

const getDaysInYear = (year) => {
  const startDate = new Date(year, 0, 1); // jan 1
  const endDate = new Date(year + 1, 0, 1); // dec 31
  const days = [];

  // loop through the days of the year
  for (let d = startDate; d < endDate; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d)); // push each day to the arr
  }

  return days;
};

const getTempEgg = (dateStamp) => {
  const count = photoData[dateStamp]?.length || 0;
  return Array.from({ length: count }, (_, i) => <h2 key={i}>🍳</h2>);
};

const App = () => {
  const days = getDaysInYear(2024);

  return (
    <>
      <p className="mobile-alert">
        eggs can only be viewed on the <s>stove</s>desktop
      </p>
      <div className="calendar-wrapper">
        <div className="calendar">
          {/* jan 1 is on a monday so first sunday is blank */}
          <div className="day blank-day" />

          {days.map((date, i) => {
            const dateStamp = `${String(date.getMonth() + 1)}-${String(
              date.getDate()
            )}`;
            return (
              <div key={i} className="day">
                <p>{date.getDate()}</p>
                {photoData[dateStamp] && getTempEgg(dateStamp)}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
