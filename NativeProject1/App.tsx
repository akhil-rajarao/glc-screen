/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [ isPress, setIsPress ] = useState(false)
  const [ isPress1, setIsPress1 ] = useState(false)
  const [ isPress2, setIsPress2 ] = useState(false)
  const [ isPress3, setIsPress3 ] = useState(false)
  const [ isPress4, setIsPress4 ] = useState(false)


  const onButtonpress = ()=>{
    setIsPress(!isPress)
  }

const onButtonpress1 = ()=>{
    setIsPress1(!isPress1)
  }
  const onButtonpress2 = ()=>{
    setIsPress2(!isPress2)
  }

  const onButtonpress3 = ()=>{
    setIsPress3(!isPress3)
  }

  const onButtonpress4 = ()=>{
    setIsPress4(!isPress4)
  }

  


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[styles.totalContainer]}>
      <Text style={[styles.textStyling]}>You are applying
for Summer 
Health & Safety
Intern job.</Text>
<View style={[styles.headingContainer]}>
  <Text>Select Credentials That You Want To Share</Text>
  <Text style={[styles.selectStyling]}>Select All</Text>
 
</View>

<TouchableOpacity style={isPress ? styles.buttonCss : styles.buttonPress} onPress={onButtonpress}> 
<Text style={isPress?[styles.buttonText]:[styles.buttonText1]}>Texas ISD</Text>
<Text style={isPress? styles.vl : styles.vl1}></Text>
<Text style={isPress?[styles.buttonText]:[styles.buttonText1]}>Transcript</Text>
</TouchableOpacity>

<TouchableOpacity style={isPress1 ? styles.buttonCss : styles.buttonPress} onPress={onButtonpress1}> 
<Text style={isPress1?[styles.buttonText]:[styles.buttonText1]}>My Name</Text>
<Text style={isPress1? styles.vl : styles.vl1}></Text>
<Text style={isPress1?[styles.buttonText]:[styles.buttonText1]} >Recommendation Letter</Text>
</TouchableOpacity>

<TouchableOpacity style={isPress2 ? styles.buttonCss : styles.buttonPress}onPress={onButtonpress2}> 
<Text  style={isPress2?[styles.buttonText]:[styles.buttonText1]} >Tress</Text>
<Text style={isPress2? styles.vl : styles.vl1}></Text>
<Text  style={isPress2?[styles.buttonText]:[styles.buttonText1]} >Resumes</Text>
</TouchableOpacity>

<TouchableOpacity style={isPress3 ? styles.buttonCss : styles.buttonPress}onPress={onButtonpress3}> 
<Text  style={isPress3?[styles.buttonText]:[styles.buttonText1]} >Jason Miller</Text>
<Text style={isPress3? styles.vl : styles.vl1}></Text>
<Text  style={isPress3?[styles.buttonText]:[styles.buttonText1]} >Resumes</Text>
</TouchableOpacity>

<TouchableOpacity style={isPress4 ? styles.buttonCss : styles.buttonPress}onPress={onButtonpress4}> 
<Text  style={isPress4?[styles.buttonText]:[styles.buttonText1]} >Madhu</Text>
<Text style={isPress4? styles.vl : styles.vl1}></Text>
<Text  style={isPress4?[styles.buttonText]:[styles.buttonText1]} >TSI writing</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.applyButton}>
  <Text>Apply</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textStyling:{
    fontSize:50,
    color:'#249A00',
    fontWeight:700,
  },
  selectStyling:{
    fontWeight: "bold",
    color: '#0080FF',
  },
  headingContainer:{
    flex:0,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  buttonCss:{
    backgroundColor: '#ffffff',
    marginTop: 30,
    borderWidth:1.2,
    borderRadius:8,
    borderBottomWidth: 1.2,
    height:60,
    flex:0,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    color:'#000000',
  },
  buttonPress:{
    backgroundColor: '#000000',
    marginTop: 30,
    borderWidth:1.2,
    borderRadius:8,
    borderBottomWidth: 1.2,
    height:60,
    flex:0,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#ffffff',
    
  }
  
  ,
  vl: {
    borderLeftColor:'#000000',
    borderLeftWidth:2,
    height: 40,
  },
  vl1:{
    borderLeftColor:'#ffffff',
    borderLeftWidth:2,
    height: 40,
  }
  ,
  buttonText:{
    color: '#000000',

  },
  buttonText1:{
    color: '#ffffff',
  },
  totalContainer:{
    padding:10,
  },
  applyButton:{
    marginTop: 30,
    backgroundColor: '#249A00',
    height:40,
    flex:0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#ffffff',

  },
  buttonTexts:{
    color:'#ffffff'
  },


  
});

export default App;
