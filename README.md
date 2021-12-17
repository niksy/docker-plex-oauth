# Docker Plex OAuth

Docker image for [Plex OAuth](https://github.com/Dmbob/plex-oauth) support.

## Usage

```sh
docker run --rm -it \
  -e PLEX_CLIENT_IDENTIFIER=becky \
  -e PLEX_PRODUCT=prince \
  -e PLEX_DEVICE=sally \
  -e PLEX_VERSION=1 \
  -e PLEX_FORWARD_URL=https://cooper.dev \
  -e PLEX_PLATFORM=cleo \
  niksy/plex-oauth
```

## Options

| Environment variable     | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `PLEX_CLIENT_IDENTIFIER` | Unique identifier used to identify your app with Plex. |
| `PLEX_PRODUCT`           | Name of your application.                              |
| `PLEX_DEVICE`            | The type of device your application is running on.     |
| `PLEX_VERSION`           | Version of your application.                           |
| `PLEX_FORWARD_URL`       | URL to forward back to after signing in.               |
| `PLEX_PLATFORM`          | Platform your application runs on.                     |

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

<!-- prettier-ignore-end -->
