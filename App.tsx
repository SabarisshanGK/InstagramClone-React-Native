import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentScreen from './src/screens/CommentScreen/CommentScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <CommentScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
