SHELL := /usr/bin/env bash

.PHONY: build
build:
	docker buildx build --load . --tag niksy/plex-oauth:latest

.PHONY: release
release:
	docker buildx build --push --platform linux/amd64,linux/arm64 . --tag niksy/plex-oauth:latest
	make docs

.SILENT: docs
.PHONY: docs
docs:
	echo "Copying README.md to clipboard and opening edit page so you can update documentation…"
	sleep 3
	cat README.md | pbcopy
	open https://hub.docker.com/repository/docker/niksy/plex-oauth/general
