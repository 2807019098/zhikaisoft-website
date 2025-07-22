# 

FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --production

COPY .next .next
COPY public public
#COPY next.config.js ./

EXPOSE 5000

CMD ["pnpm", "start"]
