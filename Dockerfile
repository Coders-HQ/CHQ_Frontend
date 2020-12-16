# pull official base image
FROM node as build-deps

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# set ports and expose
ENV HOST=0.0.0.0
ENV PORT=33324

EXPOSE 33324

# start app
CMD ["npm", "start"]