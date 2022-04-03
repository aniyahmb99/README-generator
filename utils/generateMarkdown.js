// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (data.license) {
  } else {
    return "";
  }
  return data.license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const badgeLink =
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  return badgeLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === null) {
    return "";
  } else {
    return data.tableOfContents.license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title} 
  # Description 
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
${data.tests}

  # Questions
If you have any questions please contact me at ${data.githubemail}

`;
}

module.exports = generateMarkdown;

renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
