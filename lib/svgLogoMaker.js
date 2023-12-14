// required imports
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

// Prompts user
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: input => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  return answers;
}

//Shape choices
function generateSVG(answers) {
  let shape;

  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
    default:
      throw new Error('Invalid shape');
  }

  // Generates svg
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="100%" height="100%" fill="${answers.textColor}" />
      ${shape.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" font-size="50">${answers.text}</text>
    </svg>`;

  // Saves generated image to logo.svg
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

module.exports = { generateSVG, promptUser };

