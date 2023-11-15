FROM ubuntu:latest

RUN apt-get update && \
    apt-get -y install time g++

WORKDIR /usr/src
COPY /file /usr/src/

RUN g++ -c usercode.c -o usercode
RUN g++ -o result predefined usercode

RUN timeout 2s ./test   
