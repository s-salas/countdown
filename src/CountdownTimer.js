import React, { useEffect, useState } from "react";
import { utcToZonedTime } from "date-fns-tz";
import "./CountdownTimer.css";
import taylorImage from "./imgs/taylor.jpg";
import celebrationImage from "./imgs/celebration.png";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
  });

  const [hasEnded, setHasEnded] = useState(false);

  // Get the target date: Friday, December 20, 2024, at 4:00 PM CST
  const getNextFridayAtFour = () => {
    const targetDate = new Date(2024, 11, 20, 16, 0, 0); // 2024, Dec (11), 20th, 4:00 PM CST
    const timeZone = "America/Chicago";
    return utcToZonedTime(targetDate, timeZone);
  };

  const calculateTimeLeft = () => {
    const targetDate = getNextFridayAtFour();
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      const totalSeconds = Math.floor(difference / 1000);

      setTimeLeft({ days, hours, minutes, seconds, totalSeconds });
    } else {
      setHasEnded(true); // Countdown is over
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      {!hasEnded ? (
        <>
          <h1>Countdown To Mary's Vacation</h1>
          <div>
            <p>
              <strong>
                Time Remaining:
                <br />
              </strong>{" "}
              {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
              minutes, {timeLeft.seconds} seconds
            </p>
            <p>
              <strong>Seconds Remaining:</strong>
              <br />
              {timeLeft.totalSeconds.toLocaleString()}
            </p>
            <p id="quote">
              "Damn, it's 7:00 a.m."
              <br />- Taylor Swift
            </p>
          </div>
          <img
            src={taylorImage}
            alt="Excited Taylor"
            style={{
              width: "100%",
              maxWidth: "600px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            padding: "20px", // Add some padding around the content
          }}
        >
          <h1 style={{ marginBottom: "auto" }}>Mary is now on vacation!</h1>
          <p
            id="quote"
            style={{
              margin: "auto 0", // Auto-margin to center the quote vertically
            }}
          >
            "Long story short, I survived."
            <br />- Taylor Swift
          </p>
          <img
            src={celebrationImage}
            alt="Celebration"
            style={{
              width: "100%",
              maxWidth: "600px",
              marginTop: "auto", // Push image to the bottom
            }}
          />
        </div>
      )}
    </div>
  );
};
