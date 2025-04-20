# 🎮 Nuketown

A simple and powerful Discord bot designed to **clone and delete channels** (aka "nuke") with proper permission checks. It also includes a command to generate an **invite link** for easy bot deployment.

> ⚠️ **For moderation purposes only**. Always use responsibly.

---

## ⚙️ Features

- 💣 `nuke` command: Clones and deletes a specified channel
- 🔗 `invite` command: Generates a bot invite link (owner-only)
- ✅ Permission checks to prevent abuse
- 🛡️ Protects critical system channels from deletion
- 🧼 Minimal, easy-to-read codebase

---

## 📦 Requirements

- Node.js 16+
- npm or yarn
- A Discord bot token
- The bot must be in the server with appropriate permissions

---

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/discord-nuker-bot.git
cd discord-nuker-bot
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
TOKEN=your_discord_bot_token
PREFIX=!
OWNER_ID=your_discord_user_id
```

---

## 🚀 Running the Bot

Start the bot:
```bash
node index.js
```

---

## 💣 Commands

### `!nuke [#channel | channel_id]`

- Clones and deletes the specified channel.
- If no channel is specified, the current channel is nuked.
- Only users with **Administrator, Manage Guild, Manage Channels, and Manage Messages** permissions can use this command.
- Protected channels like **rules**, **system**, and **updates** cannot be nuked.

```bash
!nuke #general
```

### `!invite`

- Generates an OAuth2 invite link with administrator permissions.
- Only the bot owner (as set in `.env`) can run this command.

```bash
!invite
```

---

## 🛡️ Permissions Required

The bot needs the following **permissions** to function properly:

- Manage Channels
- Manage Messages
- Administrator (for full compatibility with `invite`)

Make sure to grant these permissions when inviting the bot.

---

## 🐛 Troubleshooting

- **Bot not responding?**
  - Check if it's online in your server
  - Make sure the prefix in `.env` matches what you're typing
  - Verify that the bot has the required permissions

- **Nuke command not working?**
  - Ensure the user has all the required permissions
  - Check if the channel is a protected system channel

---

## 📜 License

**MIT License** — Free for personal and commercial use

### ✨ Made with ❤️ by [ZyRox](https://github.com/tamagotchifag)
