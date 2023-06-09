const fs = require("fs");
const path = require("path");

// Get the root directory of the project
const projectRoot = path.resolve(__dirname, '../../');

// Read the package.json file of the project
const projectPackageJsonPath = path.join(projectRoot, 'package.json');
const packageJson = require(projectPackageJsonPath);

// Add the desired command to the scripts object
packageJson.scripts = packageJson.scripts || {};
packageJson.scripts.cst = "node -e \"require('sst-cold-start-tool')\"";

// Update the package.json file of the project
fs.writeFileSync(projectPackageJsonPath, JSON.stringify(packageJson, null, 2));
