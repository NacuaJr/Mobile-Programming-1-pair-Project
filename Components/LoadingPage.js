import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function LoadingPage({navigation}){

    const LoadingImage = require('../assets/logo.png');
    const toLogin = () => {
        navigation.push('LoginPage')
    }

    return(
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar style='light'/>
                <Image source={LoadingImage} style={styles.image}/>
                <TouchableOpacity style={styles.container} onPress={toLogin}>
                    <Text style={styles.generText}>Gener8</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#25242B'
    },

    image : {
        height: 140,
        width: 140,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '90%'
    },

    generText : {
        color: '#20AB7D',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})