const Guild = require("../../database/Schemas/Guild"),
  User = require("../../database/Schemas/User"),
  Commands = require("../../database/Schemas/Command");

module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {
    this.client.database.users = User;
    this.client.database.guilds = Guild;
    this.client.database.commands = Commands;

    const status = [
      {
        name: "Bot Tutorial",
      },
      {
        name: "Desenvolvido em JavaScript",
      },
    ];
    setInterval(() => {
      var randomStatus = status[Math.floor(Math.random() * status.length)];
      this.client.user.setActivity(randomStatus.name);
    }, 10 * 1000);

    this.client.user.setStatus("dnd");
  }
};
