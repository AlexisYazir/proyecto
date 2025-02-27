import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const productos = [
  { id: 1, nombre: "Pelota para perros", marca: "PetFun", precio: "$150", img: require("../assets/pelota.png") },
  { id: 2, nombre: "Hueso masticable", marca: "DogChew", precio: "$80", img: require("../assets/hueso.png") },
  { id: 3, nombre: "Zanahoria de juguete", marca: "HappyPet", precio: "$60", img: require("../assets/zanahoria.png") },
  { id: 4, nombre: "Alimento Pedigree", marca: "Pedigree", precio: "$300", img: require("../assets/alimento.png") },
];

export const Products = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {productos.map(producto => (
          <View key={producto.id} style={styles.productCard}>
            <Image source={producto.img} style={styles.productImage} />
            <Text style={styles.productName}>{producto.nombre}</Text>
            <Text style={styles.productBrand}>{producto.marca}</Text>
            <Text style={styles.productPrice}>{producto.precio}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  productCard: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productBrand: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#ff7043',
    fontWeight: 'bold',
  },
});

export default Products;