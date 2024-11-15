import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const items = [
    { id: '1', name: 'All',image: 'a.png'},
    { id: '2', name: 'Juice Stall', image: 'a.png'},
    { id: '3', name: 'Koi Koi Stall',image: 'a.png' },
    { id: '4', name: 'Java Rice Stall', image: 'a.png' },
    { id: '5', name: 'All', image: 'a.png'},
    
];

const DashboardList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal 
        showsHorizontalScrollIndicator={false} 
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E', 
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 15, 
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10, 
    marginBottom: 5,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default DashboardList;
