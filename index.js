const Discord = require("discord.js");
require("dotenv").config()
const TOKEN = "OTMyMjg4MjU1OTMwNTQ0MTQ5.YeQzGQ.EgxIcuv_eoxlDI_YG8ni0tUte8A";

// Ensure bot watch for correct things
// Discord api called discord servers guilds
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Looged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content == "pbao") {
    message.reply("A fucking genius!");
  }
});

client.login(process.env.TOKEN);
