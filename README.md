# Dev-Team-Profile-Generator

 ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

 ## Table of Contents
  * [Links](#links)
  * [Description](#app-descriptino)
  * [Technologies Used](#technologies-used)
  * [Why I Built](#why-did-i-build-this-project)
  * [What I learned](#what-did-i-learn)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [User Story](#User-Story)
  * [Acceptance Criteria](#acceptance-criteria)

![App Terminal Screenshot](https://github.com/collin-beisel-tm/dev-team-profile-generator/blob/main/assets/images/terminal-screenshot.PNG)
![App Terminal Screenshot](https://github.com/collin-beisel-tm/dev-team-profile-generator/blob/main/assets/images/browser-screenshot.PNG)

## Links
 - Github Repo:https://github.com/collin-beisel-tm/dev-team-profile-generator/
 - Application Demo Video:
## App Description

The Team Profile Generator is a Node.js app that allows users to easily generate an HTML file containing cards for each member on their team with their employee information (name, role, id, email, office number, github profile, and university if they are a student). This assignment is part of the Southern Methodist University Full-Stack Web Development Bootcamp

## Technologies used
- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
- Inquirer
- Jest
- Git/GitHub

## Why did I build this project?
I built this project as a bootcamp assignment. 

## What did I learn?
This project tought me how to build an app using Test Driven Development with Jest.js. It also taught me how to take advantage of Inquirer.js for terminal user interactivity, and gave me some more practice using the FS node module.

## Installation
 - clone this repository from github
  - open your ternimal and change directories into this application
  - run "npm install"
  - run "node index"
  - answer all questions when prompted
  - navigate to the dist folder and find the newly generated HTML file
  - Open HTML file in your default browser
## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information

THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

Additional Info:
