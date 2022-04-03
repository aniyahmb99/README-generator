// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   if (license) {
//   } else {
//     return "";
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const badgeLink =
//     "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   return badgeLink;
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === null) {
//     return "";
//   } else {
//     return tableOfContents.license;
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following dependencies must be installed to run this application properly: ${data.installation}

  # Usage
  ${data.usage}

  # License
  This project is licensed under ${data.license}

  # Contributing
  ${data.contributing}

  # Tests
${data.test}

  # Questions
If you have any questions please contact me at ${data.Github_email}

`;
}

// renderLicenseBadge();
// renderLicenseLink();
// renderLicenseSection();
module.exports = generateMarkdown;
