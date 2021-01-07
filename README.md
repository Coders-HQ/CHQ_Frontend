## Coders HQ Frontend

This repository holds the Frontend part of Coders HQ's web platform.  
You may find the Backend repository in [CHQ_Backend](https://github.com/Coders-HQ/CHQ_Backend)  
The main Coders-HQ website is hosted at [codershq.ae](https://codershq.ae)

#### The frontend uses the following project file structure (The main project file structure is in the backend docs):
### (Should be updated after each pull request/push)
📦src  
 ┣ 📂Components  
 ┃ ┣ 📂GlobalComponents  
 ┃ ┗ 📂Main  
 ┣ 📂Images  
 ┃ ┣ 📂Logo  
 ┃ ┃ ┣ 📂png  
 ┃ ┃ ┗ 📂svg  
 ┃ ┗ 📂Other  
 ┣ 📂Pages  
 ┃ ┣ 📂Home  
 ┃ ┃ ┣ 📂Navbar  
 ┃ ┣ 📂Login  
 ┃ ┣ 📂Logout  
 ┃ ┗ 📂Register  
 ┣ 📂Services  
 ┣ 📂Styles  
 ┣ 📂Videos  
 ┣ 📜App.js  
 ┣ 📜index.css  
 ┣ 📜index.js  
 ┗ 📜serviceWorker.js  

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:33324](http://localhost:33324) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `docker run -d -p 0.0.0.0:33324:33324 <image name>`

First you're gonna have to build the docker image, and give it a name..

If you face any issues regarding running the docker container, try running the container using Docker Desktop with this configuration
