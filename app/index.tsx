import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import bannerImage from './assets/img-baner.webp'; // Importa la imagen del banner

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={bannerImage} style={styles.bannerImage} />
        <Text style={styles.bannerText}>¡Bienvenido a Huellitas Shop!</Text>
        <Text style={styles.bannerSubText}>Todo lo que tu mascota necesita.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0', // Fondo naranja claro
  },
  bannerContainer: {
    backgroundColor: '#ff9800', // Naranja principal
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200, // Ajusta la altura según sea necesario
    resizeMode: 'cover',
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Texto blanco
    textAlign: 'center',
    marginBottom: 5,
  },
  bannerSubText: {
    fontSize: 16,
    color: '#ffe0b2', // Naranja más claro para el subtexto
    textAlign: 'center',
  },
});

export default HomeScreen;