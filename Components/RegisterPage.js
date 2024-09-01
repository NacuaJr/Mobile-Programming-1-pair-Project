import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";


export default function RegisterPage({navigation}){
    const [isLoginButtonPressed, setIsLoginButtonPressed] = useState(false);
    const toSignIn = () => {
        navigation.push('LoginPage')
    }
    return(
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar style="light"/>
                <Text style={styles.registerText}>Register</Text>

                <TextInput style={styles.firstName}
                placeholder='First name'
                placeholderTextColor={'#fff'}
                />
                <TextInput style={styles.lastName}
                placeholder='Last name'
                placeholderTextColor={'#fff'}
                />
                <TextInput style={styles.userEmail}
                placeholder='Email address'
                placeholderTextColor={'#fff'}
                />
                <TextInput style={styles.password}
                placeholder='Enter password'
                placeholderTextColor={'#fff'}
                secureTextEntry={true}
                />
                <TextInput style={styles.rePassword}
                placeholder='Re-enter password'
                placeholderTextColor={'#fff'}
                secureTextEntry={true}
                />

                <TouchableOpacity style={[styles.registerButton, {backgroundColor: isLoginButtonPressed ? '#35343B' : '#20AB7D'}]}
                            onPressIn={() => setIsLoginButtonPressed(true)}
                            onPressOut={() => setIsLoginButtonPressed(false)}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>

                <View style={styles.loginText}>
                    <Text style={styles.isMemberText}>Already have an account? </Text>
                    <TouchableOpacity onPress={toSignIn}>
                        <Text style={styles.signInText}>Sign in here.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.TOS}>
                <Text style={styles.agreeText}>By using this app, you are agreeing to our </Text>
                    <TouchableOpacity>
                        <Text style={styles.terms}>Terms of Service.</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#25242B',
    },

    registerText : {
        color: '#20AB7D',
        fontSize: 40,
        alignSelf: 'center',
        marginTop: '30%',
        fontWeight: 'bold'
    },

    firstName : {
        backgroundColor: '#17171B',
        color: '#fff',
        width: '75%',
        height: 50,
        alignSelf: 'center',
        marginTop: '15%',
        borderRadius: 12,
        paddingLeft: 20,
    },

    lastName : {
        backgroundColor: '#17171B',
        color: '#fff',
        width: '75%',
        height: 50,
        alignSelf: 'center',
        marginTop: '4%',
        borderRadius: 12,
        paddingLeft: 20,
    },

    userEmail : {
        backgroundColor: '#17171B',
        color: '#fff',
        width: '75%',
        height: 50,
        alignSelf: 'center',
        marginTop: '4%',
        borderRadius: 12,
        paddingLeft: 20,
    },

    password : {
        backgroundColor: '#17171B',
        color: '#fff',
        width: '75%',
        height: 50,
        alignSelf: 'center',
        marginTop: '4%',
        borderRadius: 12,
        paddingLeft: 20,
    },

    rePassword : {
        backgroundColor: '#17171B',
        color: '#fff',
        width: '75%',
        height: 50,
        alignSelf: 'center',
        marginTop: '4%',
        borderRadius: 12,
        paddingLeft: 20,
    },

    registerButton: {
        height: 50, 
        width: '75%',
        alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 15,
      },
    
      registerButtonText : {
        color: '#fff',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: 44,
      },

      loginText : {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '7%',
      },
      isMemberText : {
        color: '#fff'
      },
      signInText : {
        color: '#20AB7D'
      },

      TOS : {
        alignSelf: 'center',
        marginTop: '23.7%',   
      },
    
      agreeText : {
        color: '#fff'
      },
    
      terms : {
        color: '#20AB7D',
        textAlign: 'center',
      }
})
