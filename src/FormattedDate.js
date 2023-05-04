import React from "react";

export default function FormattedDate () {
    let now = new Date();
            let hours = now.getHours();
            if (hours < 10) {
              hours = `0${hours}`;
            }
            let minutes = now.getMinutes();
            if (minutes < 10) {
              minutes = `0${minutes}`;
            }
            let days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
            let day = days[now.getDay()];
            return (`${day} ${hours}:${minutes}`)
            
            
}