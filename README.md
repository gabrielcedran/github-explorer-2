# Creating a new React project from scratch (not using create-react-app)

## Set up a new development environment

1. Initialize the repository with the command `yarn init -y` (if yarn is not available or won't be used `npm init -y`). This step will create a package.json in the folder where the command was executed.
2. Add react's dependency - `yarn add react`
3. Add react-dom's dependency - `yarn add react-dom` (react's component for web development. Allows react to manipulation the dom)
4. Create the project's structure (public and src)
5. Add babel's dependency - `yarn add @babel/core @babel/cli @babel/preset-env -D`. Babel is a transcompiler that converts the newest js features into code that is backwards compatible with old js engines "old browsers", thus allowing developers to take advantage of them not having to worry about version compatibility. It is only necessary for development as the code is translated during the building process.
`babel/cli` allows executing babel from the command line (yarn babel -h). `babel/preset-env` identifies which type of application is being executed (node, react, native) and converts the code in the best way possible.
6. Create `babel.config.js` file and add the `'@babel/preset-env'` config
7. Add babel's dependency to support react code - `yarn add @babel/preset-react -D`
8. Add the `'@babel/preset-react'` to the `babel.config.js` file to enable babel to support react
9. Add the webpack dependency for building process. It bundles JS files for usage on browsers. `yarn add webpack webpack-cli webpack-dev-server -D`
10. Add the `babel-loader` dependency to allow webpack to use babel when bundling the project. `yarn add babel-loader -D`
11. Create the `webpack.config.js` file in the root path of the project and add initial configuration.
`entry` is the file that will be used to initiate the bundling process. 
`output` what is going to be the generated file name and location. 
`resolve` is used to configure which files webpack should consider when bundling based on the `entry` (imports)
`rules` how webpack should bundle. E.g which directories it should not process (e.g node_modules), which loader it should use, etc 
12. To remove the need of statically referencing the bundled js in the html page and in the webpack configuration, it is possible to use the  `html-webpack-plugin` - `yarn add html-webpack-plugin -D`. It takes care of injecting the bundled file(s) in the configured html pages according to the configuration. 
13. Add the `webpack-dev-server` and the relevant configuration to allow smoother development by enabling automatic code conversion (bundling) and the files being served by a server running on localhost. `yarn add webpack-dev-server -D`. To start the dev-server run the command `yarn webpack serve`.
14. Configure source map to ease debugging during development. It allows the developer tools to show the original code in place of the translated, minified and bundled one when logging errors/messages or on debug mode (when placing breakpoints). There are different types of source map. They are meant for different usage like development and production and offer different levels of details, which implies on processing time.  
15. Split between development and production environments (change webpack mode and source map according to NODE_ENV environment variable). To manage environment variables independently of OS, add the dependency `cross-env` - `yarn add cross-env -D`
16. Configure webpack to support (and know how to cope with) importing stylesheets (css files) directly from the js files by using the loaders `style-loader` and `css-loader` - `yarn add style-loader css-loader -D` and adding a new rule on webpack.config.js file to delegate the processing of css to them.
17. Configure SASS to enable css extensions and extra powerful features on top of css. It is yet another webpack loader `sass-loader`, `sass` dependency itself - `yarn add sass-loader node-sass -D` and a small tweak on the css rules in the webpack.config.js file (.scss is used for sass files which requires braces to delimit selectors and .sass does not require braces but indentation).


### Using babel/cli
To manually translate a js file, use the following command:

`yarn babel {from_file} --out-file {to_file}` example `yarn babel src/index.js --out-file dist/bundle.js`

### Using webpack
To trigger the bundling process just execute the command `yarn webpack`.

## Concepts of React

React transforms react code (and html written directly in the js code) into standard javascript script code that manipulates the ui elements via the html dom (when it is web).
Example:
```
function App() {
    return <h1>Hello World</h1>
}
```

will be converted into something like:
```
function App() {
    return _react["default"].createElement("h1", null, "Hello World")
}
```

### Avoiding the need to import react in every single file

In order to support react syntax (html tags like) in javascript, the react library must be imported in files that are using react code. 
To avoid boilerplate, since version 17, it is possible configure babel to handle this requirement via configuration automatically.

```
['@babel/preset-react', {
    runtime: 'automatic'
}]
```