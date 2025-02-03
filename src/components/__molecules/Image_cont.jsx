import "./Header.scss";
import photo1 from "../../assets/Rectangle 2 (1).svg";
import React, { useState, useEffect } from "react";

function Image_cont() {
  const [dateTime, setDateTime] = useState("");

  function updateDateTime() {
    let date = new Date();
    let formattedDate = date.toDateString();
    let formattedDateTime = `${formattedDate} ${date.toLocaleTimeString()}`;
    setDateTime(formattedDateTime);
  }

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
  }, []);

  return (
    <div className="image_cont">
      <img src={photo1} />
      <div className="date_time">{dateTime}</div>
    </div>
  );
}

export default Image_cont;
