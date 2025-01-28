import dotenv from "dotenv";

dotenv.config();

const botToken = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

if (!botToken || !clientId) {
	console.error("No clientId or botToken found. Please check your .env file");
	process.exit(1);
}

export { botToken, clientId };