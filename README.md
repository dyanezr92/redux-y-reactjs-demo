# redux-y-reactjs-demo

Companion Demo for the "Redux y ReactJS" Slides.

This project configuration is based on the [Redux todo example](https://github.com/reduxjs/redux/tree/master/examples/todos).

The functionality is based on [redyx-y-reactjs-demo](https://github.com/dyanezr92/redux-y-reactjs-demo), including also:
- Support for user complaints
- Counters for user comments/complaints in the header
- Support for deleting user comments/complaints
- Added Redux to manage state
- Added support for Redux DevTools in index.js as a middleware
- Added tests with Jest and Enzyme
- Compiling with yarn and updated configuration

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all the needed dependencies.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn test [--watch]`

Executes all the tests in the app with Jest.
