FROM node:10

#Set path for app directory inside container
WORKDIR /usr/src/app

#Copy package.json and package-lock.json into current container's working directory
COPY package*.json ./ 

#Run npm scripts to install app dependencies
RUN npm client-install
RUN npm install

#Copy current app files into container
COPY . .

#Run both the server and the client together 
CMD ["npm", "run", "dev"]








