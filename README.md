# F1-for-beginners
An open-source React Native &amp; Expo app designed to help new fans navigate Formula 1 terms, 2026 driver grids, team specs, and historical champions.
# F1 for Beginners 🏎️

> An open-source interactive Formula 1 reference guide built with React Native and Expo.

[![Try on Expo Snack](https://img.shields.io/badge/Expo-Try_Live_Demo-blue?style=for-the-badge&logo=expo)](https://snack.expo.dev/@ahmad_xoox/f1-for-beginners?platform=ios)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 📌 Purpose & Overview

**F1 for Beginners** is an interactive, lightweight mobile application built to bridge the gap between casual viewers and the complex world of Formula 1. Designed around modern racing regulations and track technology, the application simplifies intricate motorsport concepts into an intuitive, accessible interface. 

Whether a fan is trying to understand tactical radio commands, aerodynamic principles like Active Aero, pit stop strategies, or track jargon, this app serves as a real-time reference guide during race weekends.

---

## ✨ Features

- **2026 Drivers Grid:** Full profile breakdown of all 22 drivers across 11 teams with season stats, driver numbers, and bios.
- **Constructors & Teams:** Specifications for every constructor, including power unit suppliers, team colors, and headquarters locations.
- **World Champions Log:** Historical database tracking Drivers' World Champions from 1950 to the modern era.
- **Comprehensive F1 Dictionary:** Categorized explanations with real-time search filtering covering:
  - Basic On-Track Terminology (Apex, Dirty Air, Delta Time, Oversteer/Understeer)
  - Aerodynamics & Car Components (Active Aero, DRS, Downforce, Power Unit)
  - Race Weekend Formats & Grid Setup (Parc Fermé, Sprint, Pole Position)
  - Tyres & Strategy (Compounds, Degradation, Undercut/Overcut)
  - Flags, Neutralizations & Officials (VSC, Safety Car, Stewards, Blue Flag)
  - Team Radio & Broadcast Terms ("Box, Box", Lift & Coast, Track Limits)
- **Modern UI:** Responsive search bar, fluid screen transitions, and custom glassmorphic UI components.

---

## 📂 Repository Structure

```text
f1-for-beginners/
├── src/
│   ├── components/
│   │   └── GlassCard.js     # Reusable UI card component
│   └── data/
│       └── f1Data.js        # Drivers, Teams, Champions & DICTIONARY data
├── App.js                   # Main application layout and navigation logic
├── package.json             # Dependencies and scripts
├── app.json                 # Expo configuration
└── README.md                # Project documentation
