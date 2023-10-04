import React, { useState, useEffect } from "react";

function Clock() {
  const [currentHours, setHours] = useState(0);
  const [currentMinutes, setMinutes] = useState(0);
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [timeCode, setTimeCode] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let day = date.getDay();
      let dateInt = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();

      switch (day) {
        case 0:
          setCurrentDay("Sunday");
          break;
        case 1:
          setCurrentDay("Monday");
          break;
        case 2:
          setCurrentDay("Tuesday");
          break;
        case 3:
          setCurrentDay("Wednesday");
          break;
        case 4:
          setCurrentDay("Thursday");
          break;
        case 5:
          setCurrentDay("Friday");
          break;
        case 6:
          setCurrentDay("Saturday");
          break;
        default:
          console.log("error");
      }

      switch (month) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
          month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
          month = "November";
          break;
        case 11:
          month = "December";
          break;
        default:
          month = "Invalid month";
      }

      setHours(hours);
      setMinutes(minutes);
      setCurrentDate(dateInt);
      setCurrentMonth(month);
      setCurrentYear(year);

      if (hours >= 12) {
        setTimeCode("PM");
      } else if (hours < 12) {
        setTimeCode("AM");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="taskbarclock">
      <p
        title={`${currentDay} ${currentDate} ${currentMonth} ${currentYear} ${currentHours}:${currentMinutes} ${timeCode}`}
      >
        {currentHours}:{currentMinutes} {timeCode}
      </p>
    </div>
  );
}

export default Clock;
