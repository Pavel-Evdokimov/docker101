FROM node AS build
RUN mkdir /app 
WORKDIR /app
COPY package.json /app
RUN npm install

FROM node
COPY --from=build /app/node_modules /app/node_modules
COPY . /app
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD ["server.js"]