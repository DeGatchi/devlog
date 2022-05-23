import styled from "styled-components";

export const _calculateDateAndTime = (unix) => {
  let date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(unix);
  return date;
};

export const _calculate_y_m_d_h_m = (unix) => {
  let date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(unix);
  return date;
};

export const _calculate_m_d_h_m_s = (unix) => {
  let date = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(unix);
  return date;
};

export const _calculate_m_d_h_m = (unix) => {
  let date = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(unix);
  return date;
};

export const _calculateDate = (unix) => {
  let date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(unix); // 01/11/2021
  return date;
};

export const _calculateTime = (unix) => {
  let time = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentTimestamp); //9:27:16 PM
  return time;
};

export const _formatNumberComma = (number) => {
  const newNumber = Number(number).toFixed(0).toLocaleString(); // "1,234,567,890"
  // console.log("formatted", newNumber);
  return newNumber;
};





// [0] = s, [1] = m, [2] = h, [3] = d, [4] = w
export const _formatSeconds = (remaining) => { 
    const s = Math.floor(remaining % 60);
    const m = Math.floor(remaining % 3600 / 60);
    const h = Math.floor(remaining % (3600 * 24) / 3600);
    const d = Math.floor(remaining / (3600 * 24));
    const w = Math.floor(d / 7);
    return [s, m, h, d, w]
}





export const cutAddress = (address) => {
  return address.slice(0, 5) + "..." + address.slice(-3);
};







export const ProgressBarContainer = styled.div`
  width: "100%";
  height: "5px";
  background-color: "#919191";
  border-radius: "20px";
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.span`
  width: ${({ width }) => (width ? `${width}` : `0%`)};
  height: "8px";
  background-color: "#FFC107";
  border-radius: "20px";
  display: block;
`;

export const _progressBar = (input0, input1) => {
  const percentage = (input0 / input1) * 100;
  return (
    <ProgressBarContainer>
      <ProgressBar width={`${percentage}%`} />
    </ProgressBarContainer>
  );
};

import { useState, useEffect } from "react";

export const CountDown = ({ input }) => {
  const [days, setDays] = useState(8452627);
  const [hours, setHours] = useState(8452627);
  const [minutes, setMinutes] = useState(8452627);
  const [seconds, setSeconds] = useState(8452627);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("December 25, 2021 00:00:00").getTime();
      const today = new Date().getTime();

      const timeDiff = endDate - today;

      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;
    //   const weeks = days * 7;

    //   let timeWeeks = Math.floor(timeDiff / weeks);
      let timeDays = Math.floor(timeDiff / days);
      let timeHours = Math.floor((timeDiff % days) / hours);
      let timeMinutes = Math.floor((timeDiff % hours) / minutes);
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

      setDays(timeDays);
      setHours(timeHours);
      setMinutes(timeMinutes);
      setSeconds(timeSeconds);
      setIsLoading(false);
    };

    setInterval(countdown, 1000);
  }, []);

  return (
    (
      <>
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <section className="container">
            <h1>React Countdown Timer</h1>

            <div className="countdown">
              <article>
                <p>{days}</p>
                <h3>Days</h3>
              </article>
              <article>
                <p>{hours}</p>
                <h3>Hours</h3>
              </article>
              <article>
                <p>{minutes}</p>
                <h3>Minutes</h3>
              </article>
              <article>
                <p>{seconds}</p>
                <h3>Seconds</h3>
              </article>
            </div>
          </section>
        )}
      </>
    )
  );
};
