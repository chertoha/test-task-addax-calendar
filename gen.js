import { Command } from "commander";
import fs from "fs";
import path from "path";

console.log("---------CLI--------");

const program = new Command();
program
  .option("-c, --component <type>", "Set component name")
  .option("-f, --folder <type>", "Components folder path");

console.log(process.argv);

program.parse(process.argv);
const argv = program.opts();

console.log(argv);

invokeAction(argv);

function invokeAction({ folder, component: components }) {
  if (!folder) {
    console.warn("Script must specify components folder");
    process.exit(1);
  }

  const componentList = components.split("/");

  componentList.forEach(component => {
    if (!component) {
      console.warn("Script must specify component");
      process.exit(1);
    }

    // const folderPath = path.join(__dirname, folder, component);
    const folderPath = path.resolve(folder, component);
    const fileName = `${component}.tsx`;
    const filePath = path.join(folderPath, fileName);
    const indexFilePath = path.join(folderPath, "index.ts");

    if (!fs.existsSync(folderPath)) {
      fs.mkdir(folderPath, err => {
        if (err) {
          return console.error(err);
        }

        fs.writeFileSync(filePath, componentCode(component));
        fs.writeFileSync(indexFilePath, `export { default } from "./${component}";`);
      });
    } else {
      console.warn(`Folder ${component} already exists`);
    }
  });
}

console.log("---------CLI--------");

function componentCode(component) {
  return `
import { FC } from "react";\n

interface IProps {
    //...
}\n

const ${component}: FC<IProps> = () => {
    return <div>${component} component</div>;\n
};\n

export default ${component};\n    
`;
}
