
# 📦 jsonenv_lite

[![npm version](https://img.shields.io/npm/v/jsonenv.svg?style=flat-square)](https://www.npmjs.com/package/jsonenv)
[![npm downloads](https://img.shields.io/npm/dt/jsonenv.svg?style=flat-square)](https://www.npmjs.com/package/jsonenv)
[![license](https://img.shields.io/npm/l/jsonenv.svg?style=flat-square)](LICENSE)

A lightweight, zero-dependency utility for **loading environment settings from JSON files** in Node.js and React.  
Instead of `.env` files with flat variables, you can organize structured config in `Appsetting.json`
---

## ✨ Features
- ✅ Load configuration from a **default JSON file** (`Appsetting.json`)  
- ✅ Supports **nested JSON objects** (deeply structured configs)  
- ✅ Works in **Node.js** (server) and **React** (frontend)  
- ✅ Simple API: `config(<optional filepath>)`  
- ✅ Zero external dependencies → small and fast  

---

## 📥 Installation

### npm
```bash
npm install jsonenv
```
### yarn
```bash
yarn add jsonenv
```
### pnpm
```bash
pnpm add jsonenv
```
### CDN (for browser use)
```html
<script src="https://unpkg.com/jsonenv@latest/dist/jsonenv_lite.min.js"></script>
```

---



### 1. Create a config file (`Appsetting.json`)

```json

{
  "Database": {
    "Host": "localhost",
    "Port": 5432,
    "User": "admin",
    "Password": "secret"
  },
  "App": {
    "Name": "MyApp",
    "Version": "1.0.0"
  }
}
```

### 2. Load it in Node.js

```javascript

import { config } from "jsonenv_lite";

// Default: loads Appsetting.json from project root
const settings = config();

console.log(settings.Database.Host); // "localhost"
console.log(settings.App.Name);      // "MyApp"
```
### 3. Load it in React

Place  `Appsetting.json`  inside your  `public/`  folder.

```javascript

import { config } from "jsonenv_lite";

const settings = config();

function App() {
  return (
    <div>
      <h1>{settings.App.Name}</h1>
      <p>Version: {settings.App.Version}</p>
    </div>
  );
}

export default App;
```
### 4. Custom Config File

```javascript

import { config } from "jsonenv_lite";

// Load a different file
const settings = config("config/production.json");

console.log(settings.Database.User); // "admin"
```
----------

## 🔎 Nested JSON Example

`Appsetting.json`

```json

{
  "Logging": {
    "Level": "Debug",
    "Targets": {
      "Console": true,
      "File": {
        "Path": "logs/app.log",
        "MaxSizeMB": 10
      }
    }
  }
}
```
**Usage:**

```javascript

import { config } from "jsonenv_lite";

const settings = config();

console.log(settings.Logging.Level);              // "Debug"
console.log(settings.Logging.Targets.Console);    // true
console.log(settings.Logging.Targets.File.Path);  // "logs/app.log"
```
----------

## 📘 API Reference

### `config(filePath?: string): object`

-   **`filePath`**  (optional):  
    Path to a custom JSON config file.  
    _Default:  `Appsetting.json`  in project root._
    

**Returns**  
A plain JavaScript object representing your JSON config.

----------

## ⚠️ Error Handling

### File not found

```bash

Error: Config file not found: /path/to/Appsetting.json
```
### Invalid JSON

```bash

Error: Invalid JSON format in /path/to/config.json
```
----------

## 🔄 Comparison with dotenv

| Feature                 | dotenv (.env)       | jsonenv_lite (JSON)      |
|-------------------------|---------------------|---------------------|
| Flat key-value pairs    | ✅ Yes              | ❌ No               |
| Nested config           | ❌ No               | ✅ Yes              |
| Type safety (numbers)   | ❌ Strings only     | ✅ Native types     |
| Readable for large apps | ❌ Hard to manage   | ✅ Organized        |
| Environment-specific    | ✅ Multiple `.env` files | ✅ Multiple JSON configs |
| Secret management       | ✅ `.env` + `.gitignore` | ✅ JSON + encryption |
| Frontend compatibility  | ❌ Requires build tools | ✅ Directly usable  |

---
## 🛠 Troubleshooting

**Error: "Cannot find module 'jsonenv'"**

-   Ensure you ran  `npm install jsonenv`
    
-   Check  `package.json`  for correct dependencies
    

**React build error**

-   Place  `Appsetting.json`  inside  `public/`  so it's available at runtime
    

**File not loading**

-   If using a custom path, ensure it's correct relative to your project root
    

----------

## 🤝 Contributing

1.  Fork the repo
    
2.  Create a feature branch (`git checkout -b feature/my-feature`)
    
3.  Commit changes (`git commit -m "Added my feature"`)
    
4.  Push (`git push origin feature/my-feature`)
    
5.  Open a Pull Request 🚀
    

----------

## 📅 Roadmap

-   Support async config loading (for fetch in React)
    
-   Add TypeScript typings
    
-   Add schema validation (optional)
    

----------

## 📄 License

MIT License © 2025 Pankaj Kumar Rai

----------

## 🔗 Links

-   [📦 npm package](https://www.npmjs.com/package/jsonenv_lite)
    
-   [💻 GitHub repository](https://github.com/impankajrai/jsonenv_lite)