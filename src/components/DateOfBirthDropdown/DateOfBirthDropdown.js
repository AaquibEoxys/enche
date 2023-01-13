import React, { useState } from "react";
import "./DateOfBirthDropdown.scss";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

const DateOfBirthDropdown = () => {
  const [date, setDate] = useState({ year: "", month: "", day: "" });

  const [monthError, setMonthError] = useState(false);
  const [dayError, setDayError] = useState(false);
  const [yearError, setYearError] = useState(false);

  const submit = () => {
    console.log(date);
    if (date.month === "") {
      setMonthError(true);
    }
    if (date.day === "") {
      setDayError(true);
    }
    if (date.year === "") {
      setYearError(true);
    }
  };
  return (
    <>
      <div className="optionName">
        <DayPicker
          defaultValue={"DD"}
          year={date.year} // mandatory
          month={date.month} // mandatory
          endYearGiven // mandatory if end={} is given in YearPicker
          value={date.day} // mandatory
          onChange={(day) => {
            // mandatory
            setDate((prev) => ({ ...prev, day }));
          }}
          id={"day"}
          classes={`dropdown ${monthError ? "error" : ""}`}
          optionClasses={"option"}
        />
      </div>
      <div className="optionName">
        <MonthPicker
          defaultValue={"MM"}
          //   numeric // to get months as numbers
          endYearGiven // mandatory if end={} is given in YearPicker
          year={date.year} // mandatory
          value={date.month} // mandatory
          onChange={(month) => {
            // mandatory
            setDate((prev) => ({ ...prev, month }));
            setMonthError(false);
          }}
          id={"month"}
          classes={`dropdown ${dayError ? "error" : ""}`}
          optionClasses={"option"}
        />
      </div>
      <div className="optionName">
        <YearPicker
          defaultValue={"YYYY"}
          start={1980} // default is 1900
          end={2020} // default is current year
          reverse // default is ASCENDING
          value={date.year} // mandatory
          onChange={(year) => {
            // mandatory
            setDate((prev) => ({ ...prev, year }));
          }}
          id={"year"}
          classes={`dropdown ${yearError ? "error" : ""}`}
          optionClasses={"option"}
        />
      </div>
    </>
  );
};

export default DateOfBirthDropdown;
