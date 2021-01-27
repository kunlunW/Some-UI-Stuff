import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert,TouchableOpacity, Button} from 'react-native';
import UserInput from './UserInput'


export default function Register({ navigation }) {

  var userNameConst = ""
  var userPasswordConst = ""



  const [userErr, setUserErr] = useState("Warning: Username and password needs to contain at least 5 characters! ")
  const [submit, updateUserData] = useState(false)


  async function registrationAuth() {
    
    updateUserData(true)
    let userNametaken = false
    let accountCreated = false

    await fetch('https://mysqlcs639.cs.wisc.edu/users', {
      method: 'POST',
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      redirect:"follow",
      referrerPolicy:"no-referrer",
      body: JSON.stringify({
        username: userNameConst,
        password: userPasswordConst,
      })

    }).then((response) => response.json())
      .then((json) => {
        let errorNotification = json.message
       accountCreated = (errorNotification === "User created!")
       if(accountCreated){
          navigation.navigate('LoginPage')
          Alert.alert(
           'Success! Please sign in to you new account!'
          )
        }
        else{
        // set the error message 
          setUserErr(errorNotification)
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
          <Text style={styles.customBtnText}>Registration</Text>
        </TouchableOpacity>

      <Text> </Text>

      <Text style={styles.text}> {userErr} </Text>

      <UserInput 
      userData={submit}  
      style={styles.userinput} 
      placeholder={'Username'} 
      getVal={(username) => retrieveName(username)} />

      <UserInput 
      userData={submit}  
      style={styles.userinput} 
      placeholder={'Password'} 
      secureTextEntry getVal={(password) => getPassword(password)} />


      <Text> </Text>

        <TouchableOpacity
          style={styles.customBtnBG2}
          onPress={() => registrationAuth()}
        >
          <Text style={styles.customBtnText2}> Register </Text>
        </TouchableOpacity>

      <Button 
      title={"I do have an account! Go back to login! "} 
      onPress={() => navigation.navigate('LoginPage')} 
      style={styles.textBtn} />


      
        <Button 
        title={"Need Help? Click here! "} 
        style={styles.registerNow} 
        />



    </View>
  );
}

const styles = StyleSheet.create({
  userinput: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 8

  },
  
  textBtn: {
    marginTop: 20,
    color: 'orange',
    maxWidth: '80%',
    marginVertical: 10,
  },
  
  container: {
    flex: 1,
    marginTop: '-40%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 40
  }, 

  customBtnBG: {
    backgroundColor: "blue",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    paddingBottom: 10,
    paddingTop:10
    },

    customBtnText: {
      fontSize: 40,
      fontWeight: '400',
      color: "#fff",
      
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 3,
    marginHorizontal:20,
    backgroundColor: 'red'
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




});