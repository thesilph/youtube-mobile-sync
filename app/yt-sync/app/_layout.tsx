import React, { useEffect, useState } from 'react';
import VideoRedirect from '@/components/yt/VideoRedirect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SetId from '@/components/yt/SetId';

export default function RootLayout() {
  const [userID, setUserID] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('userID').then(setUserID);
    loading && setLoading(false);
  }, []);

  return (
    <> 
      {!loading ?
        userID ? (
          <VideoRedirect userID={userID} />
        ) : (
          <SetId setUserId={async (id: string) => {
            await AsyncStorage.setItem('userID', id);
            setUserID(id);
          }} />
        )
      : 
      <></>
    }
    </>
  );
}
