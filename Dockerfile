FROM node:14.1.0-slim AS build
RUN mkdir /app 
WORKDIR /app
COPY package.json /app
RUN npm install

FROM node:14.1.0-slim
COPY --from=build /app/node_modules /app/node_modules
COPY . /app
EXPOSE 3000
WORKDIR /app
ENTRYPOINT [ "node" ]
CMD ["server.js"]