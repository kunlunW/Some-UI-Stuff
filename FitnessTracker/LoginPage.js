import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
import UserInput from './UserInput'
import base64 from 'base-64'

export default function LoginPage({ navigation }) {
  
  var userNameConst = ""
  var userPasswordConst = ""


  const [userErr, setUserErr] = useState("Warning: Do not disclose any of your sensitive info")
  const [userInformation, updateUserData] = useState(false)
  
  
  async function userAuthenticate() {
    
    updateUserData(true)

    await fetch('https://mysqlcs639.cs.wisc.edu/login', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + base64.encode(userNameConst + ":" + userPasswordConst),
      }
    }).then((response) => response.json())
      .then((json) => {
        // check login information 
        if (!json.token) {
          // print out the error message
          setUserErr("Wrong username or password! Try again!")
        }
        else {
          // otherwise --> true --> login
          setUserErr("Success! Enjoy!")
          // once successfully login, we'll go to the user information page
          navigation.navigate('UserInfo')
        }
      })
      updateUserData(false)
  }

  function retrieveName(username) {
    userNameConst = username
  }
  function getPassword(password) {
    userPasswordConst = password
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.customBtnBG}
          onPress={() => {}} 
          disabled
        >
        <Text style={styles.customBtnText}>Please Sign in </Text>
        </TouchableOpacity>

      <Text> </Text>

      <Text style={styles.text}> {userErr} </Text>


      <UserInput 
      userData={userInformation} 
      placeholder={'Enter username'} 
      getVal={(username) => retrieveName(username)} />

      <UserInput 
      userData={userInformation} 
      placeholder={'Enter assword'} 
      secureTextEntry getVal={(password) => getPassword(password)} />

        <Text> </Text>

        <TouchableOpacity
          style={styles.customBtnBG2}
          onPress={() => userAuthenticate()}
        >
          <Text style={styles.customBtnText2}>Please Sign in </Text>
        </TouchableOpacity>


        <Text> </Text>

        <TouchableOpacity
          style={styles.customBtnBG3}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.customBtnText2}> No Account? Register now! </Text>
        </TouchableOpacity>


        <Button 
        title={"Need Help? Click here! "} 
        style={styles.registerNow} 
        />

    </View>
  );
}

const styles = StyleSheet.create({
  
  
  
  
  
  container: {
    flex: 1,
    marginTop: '-40%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    color: 'orange'
  },


  customBtnText: {
    fontSize: 40,
    fontWeight: '400',
    color: "#fff",
    
},

/* Here style the background of your button */
customBtnBG: {
backgroundColor: "blue",
paddingHorizontal: 30,
paddingVertical: 15,
borderRadius: 20,
paddingBottom: 10,
paddingTop:10
},


customBtnBG2: {
  backgroundColor: "orange",
  paddingHorizontal: 50,
  borderRadius: 20,
  paddingBottom: 10,
  paddingTop:10
  },

customBtnText2: {
  fontSize: 20,
  color: "white",
  fontWeight: 'bold'
},

registerNow: {
  marginTop: 20,
    color: 'orange',
    maxWidth: '80%',
    marginVertical: 10,
},


customBtnBG3: {
  backgroundColor: "lightskyblue",
  paddingHorizontal: 50,
  borderRadius: 20,
  paddingBottom: 10,
  paddingTop:10
  },


text: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 3,
    marginHorizontal:20,
    backgroundColor: 'red'
    }



});