import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChatPage from './screens/ChatPage';

export default function App() {
  return (
    <SafeAreaView>
      <ChatPage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
