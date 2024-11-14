import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const items = [
  { id: '1', name: 'Koi Koi Stall', price: 'PHP 85', image: 'https://example.com/image1.jpg' },
  { id: '2', name: 'Juice Stall', price: 'PHP 60', image: 'https://example.com/image2.jpg' },
  { id: '3', name: 'Chicken Stall', price: 'PHP 90', image: 'https://example.com/image3.jpg' },
  { id: '4', name: 'Donut Stall', price: 'PHP 75', image: 'https://example.com/image4.jpg' },
  { id: '5', name: 'Java Rice Stall', price: 'PHP 75', image: 'https://example.com/image5.jpg' },
  { id: '6', name: 'Buko Shake Stall', price: 'PHP 60', image: 'https://example.com/image6.jpg' },
  // Add more items as needed
  { id: '7', name: 'Koi Koi Stall', price: 'PHP 85', image: 'https://example.com/image1.jpg' },
  { id: '8', name: 'Juice Stall', price: 'PHP 60', image: 'https://example.com/image2.jpg' },
  { id: '9', name: 'Chicken Stall', price: 'PHP 90', image: 'https://example.com/image3.jpg' },
  { id: '10', name: 'Donut Stall', price: 'PHP 75', image: 'https://example.com/image4.jpg' },
  { id: '11', name: 'Java Rice Stall', price: 'PHP 75', image: 'https://example.com/image5.jpg' },
  { id: '12', name: 'Buko Shake Stall', price: 'PHP 60', image: 'https://example.com/image6.jpg' },
];

const FoodList = () => {
  return (
    
    <ScrollView style={styles.bg}>
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      numColumns={2} // Display two items per row
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <FontAwesome name="shopping-cart" size={20} color="white" style={styles.cartIcon} />
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#2DBD74', // Green background
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    flex: 1,
    maxWidth: '45%', // Adjust for spacing between columns
    minHeight: 180,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 10,
  },
  cartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  bg : {
    backgroundColor: '#25242B'
  }
});

export default FoodList;
