import React from 'react';
import './App.css';

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

const App = () => {
  const days = getDaysInYear(2024);

  return (
    <div className="calendar-wrapper">
      <div className="calendar">
        {/* jan 1 is on a monday so first sunday is blank */}
        <div className="day blank-day" />

        {days.map((date, i) => {
          return (
            <div key={i} className="day">
              <p>{date.getDate()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
