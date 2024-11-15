import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header Background Image */}
            <View style={styles.headerBackground}>
                <Image 
                    source={{ uri: 'https://your-background-image-url.png' }} 
                    style={styles.headerImage} 
                    resizeMode="cover" 
                />
            </View>

            {/* Profile Information */}
            <View style={styles.profileContainer}>
                <Image 
                    source={{ uri: 'https://your-profile-image-url.png' }} 
                    style={styles.profileImage} 
                />
                <Text style={styles.profileName}>Alex Mercer</Text>
                <Text style={styles.profileRole}>Koi-Koi Stall Clerk</Text>

                {/* Balance Section */}
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceLabel}>Total Balance:</Text>
                    <TextInput 
                        style={styles.balanceInput} 
                        value="P 5,439.00" 
                        editable={false} 
                    />
                </View>

                {/* Receive Payment Button */}
                <TouchableOpacity style={styles.paymentButton}>
                    <Text style={styles.paymentButtonText}>Receive Payment</Text>
                </TouchableOpacity>

                {/* Options Section */}
                <View style={styles.optionsContainer}>
                    <Option icon="heart" text="Your Favorite" />
                    <Option icon="star" text="Try Premium" />
                    <Option icon="settings" text="Settings" />
                    <Option icon="log-out" text="Log Out" />
                </View>
            </View>
        </ScrollView>
    );
};

// Option Component for menu items with Ionicons
const Option = ({ icon, text }) => (
    <TouchableOpacity style={styles.option}>
        <Ionicons name={icon} size={20} color="#FFFFFF" style={styles.optionIcon} />
        <Text style={styles.optionText}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1C1C1E',
        alignItems: 'center',
    },
    headerBackground: {
        width: '100%',
        height: 150,
        backgroundColor: '#1C1C1E',
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: -60,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#1C1C1E',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        marginBottom: 10,
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    profileRole: {
        fontSize: 14,
        color: '#A9A9A9',
        marginBottom: 20,
    },
    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    balanceLabel: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    balanceInput: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 10,
        borderColor: '#A9A9A9',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        width: 120,
        textAlign: 'center',
    },
    paymentButton: {
        backgroundColor: '#2DBD74',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginBottom: 20,
    },
    paymentButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    optionsContainer: {
        width: '100%',
        marginTop: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 70,
        paddingVertical: 15,
        borderBottomColor: '#1C1C1E',
        borderBottomWidth: 1,
    },
    optionIcon: {
        marginRight: 15,
        color: "#2DBD74",  
    },
    
    optionText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default Profile;
