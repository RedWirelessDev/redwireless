# Google authentication extension for RedWireless

This extension allows customer to login to RedWireless using your Google account.

> **Note**: This extension requires RedWireless version 1.0.0-rc.6 or higher.

## Installation guide

### Step 1: Install the extension using npm:

```bash
npm install @redsuperadmin/google_login
```

### Step 2: Enable the extension

Edit the `config/default.json` file in the root directory of your RedWireless installation and add the following line to the `extensions` section:

```json
{
  ...,
  "system": {
    ...,
    "extensions": [
      ...,
      {
        "name": "google_login",
        "resolve": "node_modules/@redsuperadmin/google_login",
        "enabled": true,
        "priority": 10
      }
    ]
  }
}
```

### Step 3: Add the Google client ID, secret and some other configuration options

Edit the `config/default.json` file:

```json
{
  ...,
  "google_login": {
    "client_id": "YOUR_GOOGLE_CLIENT_ID",
    "client_secret": "YOUR_GOOGLE_CLIENT_SECRET",
    "success_redirect_url": "http://localhost:3000",
    "failure_redirect_url": "http://localhost:3000/account/login"
  }
}
```

### Step 4: Run the build command

```bash
npm run build
```

> **Note**: You can get the Google client ID and secret from the [Google API Console](https://console.developers.google.com/apis/credentials).