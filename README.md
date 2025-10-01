# Project-Stopwatch-App

## Project Overview

This is a Stopwatch application built with HTML, CSS, and JavaScript. It allows users to track time with hours, minutes, seconds, and milliseconds, and record lap times. The app is styled to look like a digital clock and includes buttons to control the timer.

## Features

Start – Begins counting time.

Stop – Pauses the timer.

Reset – Stops and resets the timer to 00:00:00.00.

Lap – Records the current time as a split and displays it in a list.

Milliseconds – The timer updates every 10ms for precise timing.

# How It Works

## HTML Structure:

#display shows the timer.

Buttons: Start, Stop, Reset, Lap.

#laps shows recorded lap times.

## CSS Styling:

The timer is centered using Flexbox.

Styled like a digital clock with hover effects on buttons.

Lap times are displayed in a scrollable list.

## JavaScript Functionality:

Uses setInterval() to update the timer every 10ms.

Start checks if a timer is already running to avoid multiple timers.

Stop uses clearInterval() to pause the timer.

Reset stops the timer and clears all time and laps.

Lap creates a new list item (<li>) with the current time.

Time is formatted with padStart() for consistent two-digit display.

# How to Use

Open index.html in a web browser.

Click Start to begin timing.

Click Lap to record a split time.

Click Stop to pause the timer.

Click Reset to reset everything to zero.

# Optional Notes

This version fulfills all core requirements and two bonus features (milliseconds and lap functionality).

The design is mobile-friendly to a basic degree, but responsiveness is not fully implemented (bonus feature optional).



## Screenshot of App
<img width="1216" height="855" alt="Screenshot 2025-10-02 at 00 00 29" src="https://github.com/user-attachments/assets/0013f13f-0604-4fe8-a9ad-6fb41262f203" />
