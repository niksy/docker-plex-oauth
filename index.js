import { PlexOauth } from "plex-oauth";
import ora from "ora";
import chalk from "chalk";

const spinner = ora({ spinner: "bouncingBar" });

const clientInformation = {
  clientIdentifier: process.env.PLEX_CLIENT_IDENTIFIER,
  product: process.env.PLEX_PRODUCT,
  device: process.env.PLEX_DEVICE,
  version: process.env.PLEX_VERSION,
  forwardUrl: process.env.PLEX_FORWARD_URL,
  platform: process.env.PLEX_PLATFORM,
};

const plexOauth = new PlexOauth(clientInformation);

async function main() {
  const [hostedUILink, pinId] = await plexOauth.requestHostedLoginURL();

  spinner.info(`In your browser, open ${chalk.bold(hostedUILink)}`);
  spinner.start("Waiting for auth token…");

  const authToken = await plexOauth.checkForAuthToken(pinId, 3000, 30);

  if (authToken === null) {
    spinner.fail("No auth token received");
    return;
  }

  spinner.succeed(`Auth token is ${chalk.bold(authToken)}`);
}

main();
