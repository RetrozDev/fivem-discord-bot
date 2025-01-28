# FiveM Discord Bot

A Discord bot designed for FiveM servers, providing features for server management, player interactions, and in-game events.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before getting started, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (usually included with Node.js)
- A Discord account with a created bot with an **authentication token** and a **client id**.
- A FiveM server for testing the bot.

## Installation

**1.** Clone the bot repository into a local folder:

```bash
git clone https://github.com/RetrozDev/fivem-discord-bot.git
cd fivem-discord-bot
```
**2.** Install the dependencies with npm:
```bash
npm install
```

**3.** Create a .env file in the root directory and add your Bot token and Client Id:
```bash
BOT_TOKEN= "YOUR BOT TOKEN"
CLIENT_ID= "YOUR CLIENT ID"
```

**4.** Start the bot:
```bash
npm start
```
## Contributing
Contributions are welcome! If you have a feature or improvement suggestion, feel free to open an issue or submit a pull request.

**How to contribute:**
1. Fork the repository.
2. Create a branch for your feature (git checkout -b feature/your-feature).
3. Make your changes.
4. Commit your changes (`git commit -am 'Added a new feature'`).
5. Push the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.