'strict mode';
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const processImports = (relativePath, directories, files) => {
  let imports = files.map((file) => {
    const name = path.parse(file).name;
    return `export * from './${name}';`;
  });

  if (directories.length > 0) {
    imports = imports.concat(
      directories.map((directory) => {
        return `import * as ${directory} from './${directory}';`;
      })
    );
    imports.push('\nexport {');
    imports = imports.concat(
      directories.map((impo) => `${path.parse(impo).name},`)
    );
    imports.push('};');
  }
  
  return imports.join('\n');
};

const processDirectory = (parent) => (dir) => {
  dir = path.resolve(__dirname, '..', 'src', parent, dir);

  if (fs.lstatSync(dir).isFile()) {
    return true;
  }

  try {
    let directories = fs.readdirSync(dir);
    directories = directories.filter((f) => f !== 'index.ts');
    const files = directories.filter(processDirectory(dir));

    directories = directories.filter((directory) =>
      fs.lstatSync(`${dir}/${directory}`).isDirectory()
    );

    fs.writeFileSync(
      `${dir}/index.ts`,
      processImports(dir, directories, files)
    );
  } catch (e) {
    console.error(e);
  }
  return false;
};

(async () => {
  const dir = path.resolve(__dirname, '../src');
  exec(`rm ${dir}/index.ts; rm ${dir}/**/index.ts`, () => {
    const startDirectory = fs.readdirSync(dir);
    const files = startDirectory.filter(processDirectory(''));
    const directories = startDirectory.filter((directory) =>
      fs.lstatSync(`${dir}/${directory}`).isDirectory()
    );

    // imports.push('\nexport {');
    // imports = imports.concat(
    //   files.concat(directories).map((impo) => `${path.parse(impo).name},`)
    // );
    // imports.push('};');

    fs.writeFileSync(
      `${dir}/index.ts`,
      processImports(dir, directories, files)
    );
  });
})();
