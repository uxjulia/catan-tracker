# Settlers of Catan - Dice Roll Tracker

[![Netlify Status](https://api.netlify.com/api/v1/badges/1bd5b9ec-7af8-4292-ac01-261d7eb50331/deploy-status)](https://app.netlify.com/projects/dice-tracker/deploys)

Track dice rolls while playing Settlers of Catan

https://catan.uxj.io

I built this for my own personal use, but maybe you'll find it helpful as well!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q01M6S7)

## Features

- **Roll tracker** — bar chart showing the distribution of all rolls in the current game
- **Virtual dice roller** — roll dice in-app or manually enter the result with the numpad
- **Player tracking** — track up to 6 players by name, auto-advances turn order after each roll
- **Resource tile tracker** — map your board's resource tiles to their roll numbers so you can see what was produced each roll
- **Roll log** — full history of every roll in the game
- **Resource log** — history of which resources were produced each roll
- **Undo** — remove the last logged roll
- **Full-screen mode** — expand the chart for easier viewing across the table
- **12-sided die support** — for the Game of Thrones expansion
- **PWA** — installable as a standalone app on mobile and desktop

## Keyboard Shortcuts

| Key        | Action              |
| ---------- | ------------------- |
| `Space`    | Roll dice           |
| `2`–`9`    | Log that roll value |
| `0`        | Log 10              |
| `1` or `-` | Log 11              |
| `=`        | Log 12              |
| `Z`        | Undo last roll      |
| `F`        | Toggle full-screen  |
| `N`        | Start new game      |

## Tech Stack

- React 19 + TypeScript
- Vite + Tailwind CSS v4
- Chart.js
- Deployed on Netlify

# Development

## Prerequisites

- Yarn or NPM
- Node >= 25

If using `npm` then swap out `yarn` with `npm run`:

## Install dependencies

`yarn install`

## Run local development version

`yarn dev`

## Build production version

`yarn build`

## Lint / Format

`yarn lint`

`yarn format`
