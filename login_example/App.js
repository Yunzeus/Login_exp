/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow 
 */

import React , {Component} from 'react';
import {  StyleSheet,View,Text,TextInput,TouchableOpacity,StatusBar} from 'react-native';

type Props ={};
export default class App extends Component<Props>{
render(){
  return(
<View style={styles.container}>
  <StatusBar
   backgroundColor="1e90ff"
  barStyle="light-content"/>
  <Text style={styles.welcome}>Login to my app </Text>
 <TextInput style={stylesinput}
 placeholder="Username "/>
 <TextInput style={stylesinput}
 placeholder="Password "/>
<View style={styles.btnContainer}>  
  <TouchableOpacity style={styles.userBtn} onPress={() ==>("LOGİN WORKS")}> <Text style={styles.btnText}>Login</Text></TouchableOpacity>
  <TouchableOpacity  style={styles.userBtn} onPress={() ==>("SİGN UP WORKS")}> <Text style={styles.btnText}>Sign up</Text></TouchableOpacity>
</View>

</View>

  )
}

}

const styles= StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#1e90ff',
},
welcome:{
  fontSize:30,
  textAlign:'center', 
  margin:10,
  color:"#fff",
  fontFamily:"DancingScript-Bold",
},
input:{
  width:"90%",
  backgroundColor:"#fff",
  padding:15,
   marginBottom:10,
},
userBtn:{
  backgroundColor:"#FFD700",
padding:15,
width:"45%",
},
btnText:{
  fontSize:18,
  textAlign:"center",

},
btnContainer:{flexDirection:"row",
width:"90%",
justifyContent:"space-between",
},

})


export default App;
