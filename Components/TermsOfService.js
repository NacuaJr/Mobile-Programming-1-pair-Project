import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function TermsOfService({navigation}){

    const toLogin = () => {
        navigation.navigate('LoginPage')
    }

    return(
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar style='light'/>
                <TouchableOpacity style={styles.container} onPress={toLogin}>
                    <Text style={styles.terms}>Terms</Text>
                    <Text style={styles.texts}>1. Dapat</Text>
                    <Text style={styles.texts}>2. Pasar Mi</Text>
                    <Text style={styles.texts}>3. Sir!</Text>
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

    terms : {
        color: '#20AB7D',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 40,
        fontWeight: 'bold',
    },

    texts : {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    }
})