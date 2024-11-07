const fs = require("fs");
const { Command } = require("commander");

const program = new Command();

program
  .name("counter")
  .description("Cli to do file base task")
  .version("0.0.8");

program
  .command("count_sentances")
  .description("count the number of words in the file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.read(file, "utf-8", (err, data) => {
      if (err) {
        console.log("i was here");
        console.log(err);
      } else {
        const words = data.split(" ").length;
        console.log(`there are ${words} words in the ${file}`);
      }
    });
  });

program
  .command("count_lines")
  .description("count the number of words in the file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.read(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split("\n").length;
        console.log(`there are ${lines - 1} lines in the ${file}`);
      }
    });
  });

program.parse();
