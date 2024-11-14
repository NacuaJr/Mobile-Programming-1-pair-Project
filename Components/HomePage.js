import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import FoodList from './FoodList';
import DashboardList from './DashboardList';

const HomePage = () => {
    const renderHorizontalList = () => (
        <DashboardList/>
    );
    return (
        <FlatList
            ListHeaderComponent={renderHorizontalList}  // Add horizontal list as the header
            data={[{ key: 'foodList' }]}  // Dummy data to render FoodList as a single item
            renderItem={() => <FoodList />}  // Render FoodList in the main vertical list
            keyExtractor={(item) => item.key}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
    },
});

export default HomePage;
