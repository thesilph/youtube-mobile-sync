import VideoRedirect from '@/components/yt/VideoRedirect';
import { Linking, BackHandler } from 'react-native';
import 'react-native-reanimated';
export default async function RootLayout() {

  return (
    <> 
      <VideoRedirect/>  
    </>
  );
}
