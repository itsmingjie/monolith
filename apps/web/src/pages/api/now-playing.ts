import type { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const BASIC_AUTH_TOKEN = Buffer.from(`${client_id}:${client_secret}`).toString(
  "base64"
);
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (): Promise<any> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC_AUTH_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return await response.json();
};

export const getNowPlaying = async (): Promise<any> => {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return false;
  }

  return await response.json();
};

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const nowPlaying = await getNowPlaying();
  res.status(200).json(nowPlaying);
};

export default handler;
