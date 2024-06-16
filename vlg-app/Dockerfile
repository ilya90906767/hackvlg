FROM node:16.19.1

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

# Copy the rest of the application code
COPY . .
RUN npm run build
CMD ["npm", "start"]
