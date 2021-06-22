#!/usr/bin/env sh
docker-compose up -d
sbt "run 2400"
