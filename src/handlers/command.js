const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Command", "Load Status");

module.exports = client => {
  readdirSync("../src/commands/").forEach(dir => {
    const commands = readdirSync(`../src/commands/${dir}/`).filter(f =>f.endsWith(".js"));

    for (let file of commands) {
      let pull = require(`../commands/${dir}/${file}`);
      let command = new pull();
      if (command.name) {
        client.commands.set(command.name, command);
        table.addRow(file, `✅`);
      } else {
        table.addRow(file, `❌`);
        continue;
      }
      if (command.aliases && Array.isArray(command.aliases)) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
    }
  });
  console.log(table.toString());
};