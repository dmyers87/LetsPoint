#!/usr/bin/env node
const fbcli = require('firebase-tools');
const fs = require('fs');
const path = require('path');

fbcli.setup.web().then(config => {
  console.log(`Env set to: ${config.projectId}`);
  const envFile = path.join(__dirname, '../src/services/env.ts');
  fs.writeFileSync(envFile, `export default ${JSON.stringify(config, '', '  ')};`);
});
