import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import NotificationName from './NotificationName';
import NotificationMessage from './NotificationMessage';


const DownPageHome = ({notification}: {notification: string | null}) => {
  return (
    <View style={styles.container}>
      <NotificationName/>
      <NotificationMessage newNotification={notification} />

      {/* <NavigationBar/> */}
    </View>
  );
};

export default DownPageHome;

const styles = StyleSheet.create({
  container: {
    bottom:29
  },
});
