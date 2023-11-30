






# Use the specific version of node image from alpine
FROM node:18-alpine3.18

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the application files to the container
COPY src /src
COPY public /public
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Define the command to run the app using ENTRYPOINT
ENTRYPOINT [ "npm", "run", "start:dev" ]