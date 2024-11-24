import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { WebView } from 'react-native-webview';

const App =() => {
  return(
    <WebView source={{ uri: 'https://www.google.com/' }} style={{ flex: 1 }} />
  )
}

export default App

const styles = StyleSheet.create({
  
})