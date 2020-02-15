const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const nameSplitted = componentName.split('-');
for (let i = 0; i < nameSplitted.length; i += 1) {
  nameSplitted[i] =
    nameSplitted[i][0].toUpperCase() + nameSplitted[i].substr(1);
}
const capitalCasedName = nameSplitted.join('');

const componentPath = path.join(
  __dirname,
  '../src',
  'components',
  componentName,
);

const command = `mkdir ${componentPath} && touch ${componentPath}/index.js && touch ${componentPath}/${componentName}.module.scss`;

exec(command, () => {
  fs.writeFile(
    `./src/components/${componentName}/index.js`,
    `import React from 'react';
import PropTypes from 'prop-types';\n
import { base } from './${componentName}.module.scss';\n
const propTypes = {};
function ${capitalCasedName}(props){
  return (
      <div className={base}>
        ${componentName} component works
      </div>
      );
}\n
${capitalCasedName}.propTypes = propTypes;
export default ${capitalCasedName};
`,
    (err) => {
      if (err) console.error(err);
      else
        console.log(
          'Created component at src/components/ named ',
          componentName,
        );
    },
  );
});
