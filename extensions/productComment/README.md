# RedWireless product comment extension

This is the source code for the RedWireless extension development guide: [RedWireless product comment extension](https://redwireless.ca/docs/development/module/create-first-extension).

## Installation

```bash
npm install @redsuperadmin/productcomment
```

Add the extension to your `config/default.json` file:

```json
{
  "system": {
        "extensions": [
            {
                "name": "productcomment",
                "resolve": "node_modules/@redsuperadmin/productcomment",
                "enabled": true
            }
        ]
    }
}
```