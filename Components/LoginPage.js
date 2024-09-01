import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function LoginPage({navigation}) {
    const [isLoginButtonPressed, setIsLoginButtonPressed] = useState(false);
    const toRegister = () => {
        navigation.push('RegisterPage')
    }

  return (
    <> 
        <SafeAreaView style={styles.container}>
        <StatusBar style='light'/>
        <Text style={styles.loginText}>Login</Text>
        <TextInput style={styles.userEmail}
        placeholder='Username'
        placeholderTextColor={'#fff'}/>

        <TextInput style={styles.userPassword}
        placeholder='Password'
        placeholderTextColor={'#fff'}
        secureTextEntry={true}/>

        <TouchableOpacity style={[styles.loginButton, {backgroundColor: isLoginButtonPressed ? '#35343B' : '#20AB7D'}]}
                            onPressIn={() => setIsLoginButtonPressed(true)}
                            onPressOut={() => setIsLoginButtonPressed(false)}
                           >
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerText}>
            <Text style={styles.notMemberText}>Not a member? </Text>
            <TouchableOpacity onPress={toRegister}>
            <Text style={styles.signUpText}>Sign up now.</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#25242B',
  },

  loginText : {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#20AB7D',
    textAlign: 'center',
    marginTop: '45%'
  },

  userEmail : {
    backgroundColor: '#17171B',
    color: '#fff',
    width: '75%',
    height: 50,
    alignSelf: 'center',
    marginTop: '25%',
    borderRadius: 12,
    paddingLeft: 20,
  },

  userPassword : {
    backgroundColor: '#17171B',
    color: '#fff',
    width: '75%',
    height: 50,
    alignSelf: 'center',
    marginTop: '2%',
    borderRadius: 12,
    paddingLeft: 20,
  },

  loginButton: {
    height: 50, 
    width: '75%',
    alignSelf: 'center',
    marginTop: '7%',
    borderRadius: 15,
  },

  loginButtonText : {
    color: '#fff',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: 44,
  },

  registerText : {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%',
  },

  notMemberText : {
    color: '#fff'
  },

  signUpText : {
    color: '#20AB7D'
  },

  TOS : {
    alignSelf: 'center',
    marginTop: '54%',
  },

  agreeText : {
    color: '#fff'
  },

  terms : {
    color: '#20AB7D',
    textAlign: 'center',
  }

});
