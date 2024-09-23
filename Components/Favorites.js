import {StyleSheet, SafeAreaView, Text, View } from "react-native";

export default function Favorites(){
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