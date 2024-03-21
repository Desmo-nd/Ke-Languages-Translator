import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatPage from './screens/ChatPage';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatPage/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
