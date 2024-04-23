# Use the specific version of node image from alpine
FROM node:18-alpine3.18

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy the application files to the container
COPY src /src
COPY public /public
COPY package.json .
COPY package-lock.json .

# Install production dependencies.
RUN npm install --only=production

# Build the app for production.
RUN npm run build

# Install `serve` to run the application.
RUN npm install -g serve

# The default port that serve uses (can be changed with the -l flag)
EXPOSE $PORT

# Run the web service on container startup.
CMD serve -s build -l $PORT