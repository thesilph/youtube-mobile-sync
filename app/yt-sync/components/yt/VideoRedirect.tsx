import { BackHandler, Linking } from "react-native";

export default async function VideoRedirect() {
const apikey = '14p2ivui';
  const id = 'tttytyt'; // should be set by the app
  const kvget = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${apikey}/${id}`;

  const response = await fetch(kvget);
  if (!response.ok) {
    console.error('Failed to fetch data');
    return;
  }

  const data = await response.text();
  const videoID = data.substring(1, 12);
  const videoTime = data.substring(12, 14); 

  const yturl = 'vnd.youtube://youtu.be/' + videoID + '?t=' + videoTime;
  Linking.openURL(yturl);
  BackHandler.exitApp();

  return null; // No UI to render, just a redirect
}