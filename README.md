# Twitch-Live-Viewerboard-Widget
A browser source widget to display live Twitch viewers with their profile picture, role, and follow age.
# Twitch Viewer List Widget Setup Guide
This widget displays the list of live viewers in a Twitch chat along with their profile picture, role, and how long they've been following.

**Step 1: Copy the Repository**
Clone or download the files from GitHub:
🔗 [GitHub Repo URL]

**Step 2: Configure Twitch API Credentials**
You'll need a Twitch Client ID, OAuth Token, and Channel ID.

1. Get a Twitch Developer Client ID & OAuth Token
  - Visit Twitch Developer Console
  - Create an application and get a Client ID.
  - Generate an OAuth token using:
     - Twitch Token Generator

Find Your Channel ID

Replace YOUR_CHANNEL_NAME in this link and open it in a browser:

arduino
Copy
Edit
https://api.twitch.tv/helix/users?login=YOUR_CHANNEL_NAME
Look for "id": "123456789" in the response. That’s your Channel ID.

Update config.js (or the JavaScript file)

Open the file and replace:

js
Copy
Edit
const CLIENT_ID = "YOUR_CLIENT_ID";
const CHANNEL_ID = "YOUR_CHANNEL_ID";
const AUTH_TOKEN = "YOUR_OAUTH_TOKEN";
Step 3: Add the Widget to OBS
Open OBS Studio.

Click the + button under Sources and select Browser Source.

Enter the local file path (file:///C:/path-to-widget/index.html) or host it online.

Adjust the width and height, then click OK.
