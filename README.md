# Getting Started with Create React App
This is a React project powered by webpack5

## Notice
include library:
react
redux-toolkit
json-server

## server
page
http://localhost:8080/
api
http://localhost:3001/list?_page=1&_limit=10

## analyse webpack(static module bundler)
Core packages:
webpack: The main bundler utility
webpack-cli: Provides a flexible set of commands for developers to increase speed when setting up a custom webpack project
webpack-dev-server: Provides a development server with hot-reloading capabilities

React packages:
react: Core package for building React applications
react-dom: React package for DOM rendering

Babel packages:
babel-loader: Allows transpiling JavaScript files using Babel and webpack
@babel/core: Core Babel package, necessary for Babel to work
@babel/preset-env: Allows you to use the latest JavaScript features
@babel/preset-react: Transpiles JSX to createElement calls

Linting:
eslint: The core ESLint library
eslint-webpack-plugin: Webpack plugin for ESLint
eslint-config-prettier: This package turns off all ESLint rules that are unnecessary or might conflict with Prettier. It makes the integration of Prettier and ESLint smoother. ESLint rules that would conflict with Prettier's formatting are disabled, so you can comfortably format code with Prettier without ESLint complaining about formatting issues that Prettier handles.
eslint-plugin-prettier: This package allows running Prettier as an ESLint rule and reporting differences as individual ESLint issues. It's used to enforce consistent Prettier formatting across your codebase. If you're using this plugin, your code will be formatted using Prettier when you save your file (assuming your editor is set up to do so), but if any Prettier formatting rules are not met, ESLint will highlight those issues.
eslint-plugin-react-hooks: This package provides ESLint rules for React Hooks. It enforces the Rules of Hooks – the rules that must be followed when using Hooks in React. The two main rules it enforces are "Only Call Hooks at the Top Level" (ensures hooks are not called inside loops, conditions, or nested functions) and "Only Call Hooks from React Functions" (ensures hooks are only called inside React functional components or custom hooks).

CDN:
这个版本的非html资源都放在cdn中。output.path只影响webpack的编译输出目录。通常情况下，我们使用这个目录作为服务的根目录。那么output.publicPath就不用配置了。这个值默认就是'/'.
比如我们output.path目录下面有个main.js.在html中如果使用这个main.js，webpack会编译src的值为'/main.js'.但是你如果使用其他地址，比如这里的'http://localhost:3002/'。那么编译
后的代码中src的值为'http://localhost:3002/main.js'.

然后在说说这个版本怎么启动的。
1 使用npm run build编译输出目录。
2 然后把这个目录上传到cdn上。我们在dist目录执行anywhere -p 3002来模拟cdn环境。
3 使用nginx托管html。执行npm run nginx即可。






