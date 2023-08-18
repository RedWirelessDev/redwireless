# Product review extension for RedWireless

This extension allows customer to review and rate products.

> **Note**: This extension requires RedWireless version 1.0.0-rc.6 or higher.

## Installation guide

### Step 1: Install the extension using npm:

```bash
npm install @redsuperadmin/product_review

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
        "name": "product_review",
        "resolve": "node_modules/@redsuperadmin/product_review",
        "enabled": true,
        "priority": 10
      }
    ]
  }
}
```

### Step 3: Run the build command

```bash
npm run build
```