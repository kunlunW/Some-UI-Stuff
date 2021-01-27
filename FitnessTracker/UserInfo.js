import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity} from 'react-native';

export default function userInfo() {
    return <ProfileClass />
}

class ProfileClass extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        goalDailyCalories: '',
        goalDailyProtein: '',
        goalDailyCarbohydrates: '',
        goalDailyFat: '',
        goalDailyActivity: ''
     }

     handleFirstname = (text) => {
        this.setState({ firstName: text })
     }
     handleLastname = (text) => {
        this.setState({ lastName: text })
     }

     handlegoalDailyCalories = (text) => {
        this.setState({ goalDailyCalories: text })
     }

     handlegoalDailyProtein = (text) => {
        this.setState({ goalDailyProtein: text })
     }

     handlegoalDailyCarbohydrates = (text) => {
        this.setState({ goalDailyCarbohydrates: text })
     }

     handlegoalDailyFat = (text) => {
        this.setState({ goalDailyFat: text })
     }

     handlegoalDailyActivity = (text) => {
        this.setState({ goalDailyActivity: text })
     }

    login = () => {
        alert( 'Success! Data stored!' )
     }


    render( ) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Monitor your fitness </Text>
                
                <TextInput style = {styles.input}
               placeholder = "Change Firstname"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleFirstname}/>
                
                <TextInput style = {styles.input}
               placeholder = "Change Lastname"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleLastname}/>

                <TextInput style = {styles.input}
               placeholder = "Daily Calories"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlegoalDailyCalories}/>

            <TextInput style = {styles.input}
               placeholder = "Daily Protein"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlegoalDailyProtein}/>

            <TextInput style = {styles.input}
               placeholder = "Daily Carbohydrates"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlegoalDailyCarbohydrates}/>

               <TextInput style = {styles.input}
               placeholder = "Daily Fat"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlegoalDailyFat}/>


                <TextInput style = {styles.input}
               placeholder = "Daily Activity"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlegoalDailyActivity}/>


                <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                () => this.login()
             }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        marginBottom: 40
    },
    button: {
        marginTop: 80,
        backgroundColor: 'black',
        minWidth: '40%',
        marginVertical: 10,
        borderRadius: 8,
    },


    container: {
        paddingTop: 23
     },
     input: {
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: 'orange',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
        

     },
     submitButtonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
     }, 

     title: {
        fontSize: 30,
        marginBottom: 40,
        color: 'orange'
      },


});