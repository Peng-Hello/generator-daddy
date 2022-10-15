const Generator = require("yeoman-generator");
const fs = require("fs-extra");
module.exports = class extends Generator {
  initializing() {
    this.log("Welcome to the Old Father Project Generator !!!");
    this.porps = {};
  }
  async prompting() {
    const props = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter a project name :",
      },
      {
        type: "input",
        name: "author",
        message:
          "Please enter the name of the project author:(Default GinPang)",
        default: "GinPang",
      },
      {
        type: "list",
        name: "license",
        message: "Please select a license for the project :",
        choices: ["MIT", "Apache"],
      },
      {
        type: "input",
        name: "repo",
        message: "Please enter repository address:",
        default: "",
      },
    ]);
    this.porps.name = props.name.toLowerCase();
    this.porps.author = props.author;
    this.porps.license = props.license;
    this.porps.repo = props.repo;
  }
  async configuring() {
    this.log("Starting copy file ...");
    try {
      await fs.copy(`${this.sourceRoot()}`, `${this.destinationRoot()}`);
    } catch (e) {
      this.log(e);
    }
  }
  writing() {
    this.log("Writing package.json file ...");
    const pkg = require("./package-template.json");
    pkg.name = this.porps.name;
    pkg.author = this.porps.author;
    pkg.license = this.porps.license;
    pkg.repository = this.porps.repo;
    this.fs.writeJSON(this.destinationPath("package.json"), pkg);
  }
  ending() {
    this.log("Bey!!!");
  }
};
