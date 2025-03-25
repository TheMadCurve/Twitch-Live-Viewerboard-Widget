# Twitch-Live-Viewerboard-Widget
A browser source widget to display live Twitch viewers with their profile picture, role, and follow age.
## Twitch Viewer List Widget Setup Guide
This widget displays the list of live viewers in a Twitch chat along with their profile picture, role, and how long they've been following.

### Step 1: Copy the Repository
Clone or download the files from GitHub:
```🔗 [GitHub Repo URL]```

### Step 2: Configure Twitch API Credentials
You'll need a Twitch **Client ID**, **OAuth Token**, and **Channel ID**.

1. **Get a Twitch Developer Client ID & OAuth Token**
    - Visit [Twitch Developer Console](https://dev.twitch.tv/console)
    - Create an application and get a **Client ID**.
    - Generate an OAuth token
2. **Find Your Channel ID**
    - Replace ```YOUR_CHANNEL_NAME``` in this link and open it in a browser:
```
https://api.twitch.tv/helix/users?login=YOUR_CHANNEL_NAME
```
  - Look for ```"id": "123456789"``` in the response. That’s your **Channel ID**.
3. **Update ```config.js``` (or the JavaScript file)**
    - Open the file and replace:
```
const CLIENT_ID = "YOUR_CLIENT_ID";
const CHANNEL_ID = "YOUR_CHANNEL_ID";
const AUTH_TOKEN = "YOUR_OAUTH_TOKEN";
```
### Step 3: Add the Widget to OBS
1. Open OBS Studio.
2. Click the ```+``` button under **Sources** and select **Browser Source**.
3. Enter the local file path (```file:///C:/path-to-widget/index.html```) or host it online.
4. Adjust the width and height, then click **OK.**
