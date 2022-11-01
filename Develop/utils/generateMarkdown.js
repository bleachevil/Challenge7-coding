
const licenseList = [
  {
    name: 'MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'ISC',
    badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    link: "https://opensource.org/licenses/ISC"
  },
  {
    name: 'Eclipse',
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    link: "https://opensource.org/licenses/EPL-1.0"
  },
  {
    name: 'The Unlicense',
    badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "https://opensource.org/licenses/unlicense"
  },
];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (const list of licenseList) {
  if (license === list.name) {
    return list.badge;
  }};

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseList.name) {
    licenseList.link
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${license}`;
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Guidelines](#guidelines)
- [Testing](#test)
- [Additional Info](#additional-info)
## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
## Guidelines Contribution:
${data.guidelines}
## Testing:
${data.test}
## Additional Info:
- Github: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}

## Licensing:
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
