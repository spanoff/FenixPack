![FenixPack](https://raw.githubusercontent.com/spanoff/fenixpack/master/img/alldevice.png)

# Fenixpack 📦🚪

#### Get a subscription to information packages for wholesale buyers or dealers of TM Phoenix.
- **API** built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly
- **Mobile** (Android and iOS) Native App build with React Native
- Written in ES6+ using Babel + Webpack.


## Features
- Modular and easily scalable code structure
- Emphasis on developer experience
- UI components in separate folder which can be swapped for your favorite UI framework easily
- Responsive UI for React Native to support Mobile and Tablet
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API
- File upload feature with GraphQL
- React storybook demonstrating UI components for web
- Server side rendering


## Useful for
- Developers with basic knowledge on React exploring advance React projects
- Developers learning React Native
- Exploring GraphQL
- Scalable project structure and code
- Starter application for Mobile and Web along with SSR
- Sample project with combination of all above


## Screenshots
Click on image to view fullscreen and zoom

### Desktop
[IMAGE](https://raw.githubusercontent.com/spanoff/fenixpack/master/img/desktop.png)

![Fenixpack Desktop](https://raw.githubusercontent.com/spanoff/fenixpack/master/img/desktop.png)

### Mobile 
[IMAGE](https://raw.githubusercontent.com/spanoff/fenixpack/master/img/mobile.png)

![Fenixpack Mobile](https://raw.githubusercontent.com/spanoff/fenixpack/master/img/mobile.png)

## Core Structure
    code
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── mobile (Android, iOS)
      │   ├── assets
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## Setup and Running
- Prerequisites
  - Node
  - MySQL (or Postgres / Sqlite / MSSQL)
- Clone repo `git clone git@github.com:spanoff/fenixpack.git fenixpack`
- Switch to `code` directory `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)
  - Modify `/mobile/src/setup/config.json` for API URL (tip: use `ifconfig` to get your local IP address)
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`
  - Mobile: Install packages `cd mobile` and `npm install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
  - Run Mobile `cd mobile` and `npm start`, browse mobile on either emulator or using Expo on your mobile phone
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server


## Resources and Inspirations
- Container Components - [Medium Post](https://medium.com/@learnreact/container-components-c0e67432e005)
- Zero to GraphQL in 30 Minutes - [YouTube](https://www.youtube.com/watch?v=UBGzsb2UkeY&list=PLkuiMQfg5DujhOSZ1A8kDl0hKV_ICTjp-)
- Building a GraphQL Server [YouTube Playlist](https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)
- Universal JavaScript Web Applications with React by [Luciano Mammino](https://github.com/lmammino) - [YouTube](https://www.youtube.com/watch?v=0VEwRFP8WtI)
- Building Youtube UI in React Native in 30 Mins - [YouTube](https://www.youtube.com/watch?v=LdKtugH-sb8)
- Building Stellar Mobile UX With React Native - [YouTube](https://www.youtube.com/watch?v=ssXB9RMTpTs)


## Why open source a project and not a boilerplate or framework?
- While building a new project with Node, you can basically start scratch, adding libraries and tools as you go on building it further.
- Comparing with any other languague, you usually start with a framework, for example, Laravel (PHP), Django (Python) or Ruby on Rails (Ruby) which includes a ton of features and codebase which you never end up using.
- I've personally found, learning by going through a good project codebase step by step while building your own project helps in ease of understanding and remembering


## Authors
- Alexander Panov - [GitHub](https://github.com/spanoff)
- Atul Yadav - [GitHub](https://github.com/atulmy)

## License

The MIT License (http://www.opensource.org/licenses/mit-license.php)
