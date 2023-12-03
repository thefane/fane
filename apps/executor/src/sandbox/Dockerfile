FROM alpine:latest

RUN apk update && apk add --no-cache nodejs python3 g++ gcc openjdk11

WORKDIR /app

COPY ./files /app
COPY entrypoint.sh /app

ENV lang="none"

RUN chmod +x entrypoint.sh

CMD ["sh","./entrypoint.sh"]
