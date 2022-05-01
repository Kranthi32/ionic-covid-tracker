# Ionic Angular Covid Tracker Application



## Table of Contents
- [Getting Started](#getting-started)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/Kranthi32/ionic-covid-tracker.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## Contributing

See [CONTRIBUTING.md](https://Kranthi32/covid-tracker-app/blob/master/.github/CONTRIBUTING.md) :tada::+1:



| Material Design  | iOS  |
| -----------------| -----|
| ![Android Menu](/resources/screenshots/Menu.png) | ![iOS Menu](/resources/screenshots/Menu.png) |


### [Chrts Page](https://github.com/Kranthi32/ionic-covid-tracker/blob/master/src/app/pages/charts/charts.page.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android charts](/resources/screenshots/charts.png) | ![iOS charts](/resources/screenshots/charts2.png) |

### [About Page](https://github.com/Kranthi32/ionic-covid-tracker/blob/master/src/app/pages/about/about.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About](/resources/screenshots/about.png) | ![iOS About](/resources/screenshots/abouts.png) |

### [Speaker Detail Page](https://github.com/Kranthi32/covid-tracker/app/blob/master/src/app/pages/speaker-detail/speaker-detail.html)

| Material Design  | iOS  |
| -----------------| -----|
| ![Android About Dark mode Page](/resources/screenshots/darkmode about.png) | ![iOS  About Dark mode Page](/resources/screenshots/darkmode about.png) |

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Dark Mode Charts](/resources/screenshots/darkmode Charts.png) | ![iOS About](/resources/screenshots/darkmode Charts2.png) |

| Material Design  | iOS  |
| -----------------| -----|
| ![Android Login](/resources/screenshots/login.png) | ![iOS About](/resources/screenshots/login.png) |


## Deploying

### Progressive Web App

1. for Testing run `ionic serve`
2. Run `ionic build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
