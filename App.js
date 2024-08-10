import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? 'midnightblue' : 'lightblue' }]}>
      <TextInput //used for input and textarea
        style={styles.input}
        value={name}
        onChangeText={setName} //Track Input using State variable
        placeholder="Example Name"
        autoCorrect={false}
        autoCapitalize="none" //characters, words, sentences
        //secureTextEntry   //*Password*
        //keyboardType='numeric'
      />
      <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>
        Hii! My name is <Text style={{ fontWeight: "bold", color: isDarkMode ? 'lightblue' : 'midnightblue' }}>{name}</Text>.
      </Text>

      <TextInput style={styles.multilinetext} 
        placeholder="message" 
        multiline  //* TextArea
      />

      <View style={styles.switch}>
        <Text style={[styles.switchHead, { color: isDarkMode ? 'lightblue' : 'midnightblue' }]}>Switch</Text>
        <Text style={[styles.switchText, { color: isDarkMode ? 'orange' : 'darkred' }]}>1. Used for integrating TOGGLES in your UI.</Text>
        <Text style={[styles.switchText, { color: isDarkMode ? 'orange' : 'darkred' }]}>2. Used if we want to users to make Binary choices.</Text>
        <Text style={[styles.switchText, { color: isDarkMode ? 'orange' : 'darkred' }]}>3. These Binary choices are handles using Satate variables.</Text>
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} trackColor={{ false: "#767577", true: 'lightblue'}} thumbColor="#f4f3f4" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    margin: 16,
    padding: 10,
    borderWidth: 1,
    fontSize: 23,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  multilinetext: {
    margin: 16,
    padding: 10,
    borderWidth: 1,
    fontSize: 23,
    minHeight: 100, //*
    textAlignVertical: "top", //*
    backgroundColor: 'white',
  },

  switch: {
    padding: 10,
  },
  switchHead:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  switchText: {
    fontSize:18,
    marginVertical: 3,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

});




// Me: Excuse me, do you have a couple of minutes?
// She: Sure!
// मैं: Thank u, मैंI’m [Your Name]. हम अक्सर same मेट्रो में travel करते हैं, and do mahine pehle mene tumko pehli baar dekha and i felt something. samay ke sath ye feeling badhti hi rahi and I realized that I really like you.
// yes हम dono एक-दूसरे के लिए totally strangers हैं, लेकिन मैं tumko जानने का एक मौका चाहता हूँ। would u like to go on a date with me?
// इस बारे में सोचने ke liye u can take ur time. I’ll be looking forward to hearing from you.

// धन्यवाद और आपका दिन शुभ हो!