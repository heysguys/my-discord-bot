import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const CHANNEL_ID = process.env.CHANNEL_ID;
const ROLE_ID = process.env.ROLE_ID;

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);

  setInterval(async () => {
    const now = new Date();
    const minutes = now.getMinutes();

    if (minutes === 17 || minutes === 47) {
      const channel = await client.channels.fetch(CHANNEL_ID);
      if (channel) channel.send(`<@&${ROLE_ID}> pingTEST HI`);
    }
  }, 60 * 1000);
});

client.login(process.env.DISCORD_TOKEN);
