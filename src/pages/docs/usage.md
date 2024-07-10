---
layout: ../../layouts/Docs.astro
title: Usage
slug: usage
previous: introduction
---

# Usage

To use `HolySheets!` in your TypeScript project, you need to import it and initialize it with your Google Sheets credentials. Here's an example:

```typescript
interface User {
  name: string;
  email: string;
  age: number;
}

const hollySheets = new HolySheets({
  spreadsheetId: "spreadsheet-id",
  privateKey: credentials.private_key, // Your credentials
  clientEmail: credentials.client_email, // Your client email
});

const user = holySheets.base<User>("Users");

await user.findMany({
  where: {
    name: {
      contains: "Joe",
    },
  },
});
/// Find all users named Joe in Users sheet
```

> [!WARNING]
> Before using HolySheets, it's important to have Google credentials for your project. For more information on how to obtain these, please refer to the [Getting Credentials](/docs/getting-credentials.md) guide.
