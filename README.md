## Creating a new React project from scratch (not using create-react-app)

1. Initialize the repository with the command `yarn init -y` (if yarn is not available or won't be used `npm init -y`). This step will create a package.json in the folder where the command was executed.
2. Add react's dependency - `yarn add react`
3. Add react-dom's dependency - `yarn add react-dom` (react's component for web development. Allows react to manipulation the dom)
4. Create the project's structure (public and src)
5. Add babel's dependency - `yarn add @babel/core @babel/cli @babel/preset-env -D`. Babel is a transcompiler that converts the newest js features into code that is backwards compatible with old js engines "old browsers", thus allowing developers to take advantage of them not having to worry about version compatibility. It is only necessary for development as the code is translated during the building process.
`babel/cli` allows executing babel from the command line (yarn babel -h). `babel/preset-env` identifies which type of application is being executed (node, react, native) and converts the code in the best way possible.



### Using babel/cli
To manually translate a js file, use the following command:

`yarn babel {from_file} --out-file {to_file}` example `yarn babel src/index.js --out-file dist/bundle.js`