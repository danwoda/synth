# synth

React synthesizer based on the book *JavaScript for Sound Artists* by William Turner.

## About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Running the app in a Docker container
In the project root directory, you can run:

### `docker-compose up`

It will run the app within a container in an interactive mode. Just hit the 'http://localhost:3000'. Changes made in the source directory (locally) will be relected with page reload with no additional steps. To stop the container, open a new terminal instance and type `docker stop msynth_c`.

## Building a new image to be shared with others

In the project root directory, hit the command:

`docker build .`