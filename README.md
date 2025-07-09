# nusc-queuebot-miniapp
The repository to hold the NUSC Telegram queuebot project as a native Telegram mini app in React + TypeScript. Previously written in Golang + Postgres at https://github.com/josh1248/telegram-queue-bot .

The API of choice to communicate with Telegram is via @vkruglikov/react-telegram-web-app.


## environment variables
The required environment variables are written within the `.envTemplate` file. The actual strings have been hidden for security reasons.


```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```


## future work

The current queuebot version at @NUSC_Queue_Bot is the fallback version due to the following key issue: https://github.com/josh1248/nusc-queuebot-miniapp/issues/6

After the JS Telegram API integration is done, a backend instance, such as a Postgres container in DigitalOcean, should be set up to store the queue persistently: https://github.com/josh1248/nusc-queuebot-miniapp/issues/8

Wrapping up, containerization should be done to allow either self hosting or cloud hosting: https://github.com/josh1248/nusc-queuebot-miniapp/issues/7