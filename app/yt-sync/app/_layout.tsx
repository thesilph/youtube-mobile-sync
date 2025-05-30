import { Linking, BackHandler } from 'react-native';
import 'react-native-reanimated';
export default async function RootLayout() {
  const apikey = '14p2ivui';
  const id = 'tttytyt';
  const kvget = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${apikey}/${id}`;
  // const kvpost = `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${apikey}/GetValue/${id}/${value}`;
  console.log('kvget:', kvget);
  const response = await fetch(kvget);
  if (!response.ok) {
    console.error('Failed to fetch data');
    return;
  }
  const data = await response.text();
  const videoID = data.substring(1, 12);
  const videoTime = data.substring(12, 14); 
  console.log('videoID:', videoID);
  console.log('videoTime:', videoTime);
  const yturl = 'vnd.youtube://youtu.be/' + videoID + '?t=' + videoTime;
  // const yturl = 'vnd.youtube://youtu.be/pFlcqWQVVuU?t=28';
  console.log('yturl:', yturl);
  Linking.openURL(yturl);
  BackHandler.exitApp();
  return (
    <>  </>
  );
}
