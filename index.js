const { promptUser, generateSVG } = require('./lib/svgLogoMaker');

async function run() {
  const answers = await promptUser();
  generateSVG(answers);
}

run();