import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [headline, setHeadline] = useState("Countdown");
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();

        const nextYear = yyyy + 1;
        const dayMonth = "10/20/";
        let birthday = dayMonth + yyyy;

        const currentDate = mm + "/" + dd + "/" + yyyy;
        if (currentDate > birthday) {
            birthday = dayMonth + nextYear;
        }

        const countDown = new Date(birthday).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDown - now;

            const days = Math.floor(distance / day);
            const hours = Math.floor((distance % day) / hour);
            const minutes = Math.floor((distance % hour) / minute);
            const seconds = Math.floor((distance % minute) / second);

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });

            if (distance < 0) {
                clearInterval(interval);
                setHeadline("It's my birthday!");
                setIsFinished(true);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            }
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {!isFinished && (
                <ul id="countdown">
                    <li>
                        <span id="day">{timeLeft.days} :</span>
                    </li>
                    <li>
                        <span id="Hours">{timeLeft.hours} :</span>
                    </li>
                    <li>
                        <span id="Minutes">{timeLeft.minutes} :</span>
                    </li>
                    <li>
                        <span id="Seconds">{timeLeft.seconds}</span>
                    </li>
                </ul>
            )}
            <h1 id="headline">{headline}</h1>
            {isFinished && (
                <div id="content">
                    <p>Thanks for celebrating with us!</p>
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
