import React, { useEffect } from "react";
import { BackHandler, Linking } from "react-native";

type VideoRedirectProps = {
  userID: string;
};

export default function VideoRedirect({ userID }: VideoRedirectProps) {
  useEffect(() => {
    const apikey = '14p2ivui';
    // test userID: 'tttytyt'
    const kvget = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${apikey}/${userID}`;

    async function redirect() {
      try {
        const response = await fetch(kvget);
        if (!response.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await response.text();
        const videoID = data.substring(1, 12);
        const videoTime = data.substring(12).replace('"', '');
        const yturl = 'vnd.youtube://youtube.com/watch?v=' + videoID + '&t=' + videoTime;
        Linking.openURL(yturl);
        BackHandler.exitApp();
      } catch (e) {
        console.error(e);
      }
    }

    redirect();
  }, [userID]);

  return null;
}