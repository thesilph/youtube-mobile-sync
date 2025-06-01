import VideoRedirect from '@/components/yt/VideoRedirect';
import { Linking, BackHandler } from 'react-native';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SetId from '@/components/yt/SetId';

export default async function RootLayout() {

  const userID = await AsyncStorage.getItem('userID');
  
  return (
    <> 
      {userID ? <VideoRedirect/> : <SetId setUserId={async (id : string) => {
          await AsyncStorage.setItem('userID', id);
        }
      } />}
      
    </>
  );
}
