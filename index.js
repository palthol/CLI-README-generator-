// ? 1. Include packages needed for this application
// ? 2. download the inquirer package by running npm install inquirer from the command line
// ? 3. Prompt the user for their information. The prompt should ask the following questions:


// What is the title of your project?
// Provide a description of your project.
// How do you install your project?
// Provide instructions and examples for use.
// Provide guidelines for contributing to your project.
// Provide instructions on how to run tests for your project.
// Choose a license for your project.
// What is your GitHub username?
// What is your email address?


// ? 4. The user's input will be captured using the inquirer package and injected into the readME template literal. The template literal will be written to a new README.md file using the fs package.




// use the import statement to import the inquirer package

import fs from 'fs';
import inquirer from 'inquirer';


// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage instructions:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license is your project under?',
    choices: ['MIT', 'GPLv2', 'Apache', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to generate README content
const generateReadme = (answers) => {
  const licenseBadge = answers.license !== 'None' ? `![License](https://img.shields.io/badge/license-${answers.license}-brightgreen)` : '';

  return `# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can NOT reach me at: 
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:${answers.email})
`;
};

// Function to initialize app
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error generating README:', err);
      } else {
        console.log('README.md has been successfully generated!');
      }
    });
  });
};

// Function call to initialize app
init();
