import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function HomePage({navigation}){

    return(
        <>
            <View style={styles.container}>
                    <Text>Hello World</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#25242B",
    }
})