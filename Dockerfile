FROM node:alpine as build 

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/

# install dependencies
RUN yarn --silent

COPY . /app
RUN yarn build
ENV NODE_ENV=production

CMD ["yarn" ,"start"]