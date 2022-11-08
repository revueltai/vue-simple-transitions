import fs from 'fs';

function preparePackage() {
  const source = fs
    .readFileSync(__dirname + '/../package.json')
    .toString('utf-8');

  const sourceObj = JSON.parse(source);

  delete sourceObj.scripts;
  delete sourceObj.devDependencies;

  if (sourceObj.main.startsWith('dist/')) {
    sourceObj.main = sourceObj.main.slice(5);
  }

  fs.writeFileSync(
    __dirname + '/package.json',
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
  );

  fs.writeFileSync(
    __dirname + '/version.txt',
    Buffer.from(sourceObj.version, 'utf-8')
  );

  fs.copyFileSync(__dirname + '/../LICENSE', __dirname + '/LICENSE');
  fs.copyFileSync(__dirname + '/../README.md', __dirname + '/README.md');
  fs.copyFileSync(__dirname + '/../.npmignore', __dirname + '/.npmignore');
}

preparePackage();
