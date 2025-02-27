import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import logo from '../assets/logoPry.png'; // Importa la imagen

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> {/* Agrega la imagen del logo */}
      <Link href="/" asChild>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Inicio</Text>
          </TouchableOpacity>
        </View>
      </Link>
      <Link href="/screens/Register" asChild>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registro</Text>
          </TouchableOpacity>
        </View>
      </Link>
      <Link href="/screens/ViewDetails" asChild>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Detalles</Text>
          </TouchableOpacity>
        </View>
      </Link>
      <Link href="/screens/Products" asChild>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Productos</Text>
          </TouchableOpacity>
        </View>
      </Link>
      <Link href="/screens/Login" asChild>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Alinea verticalmente los elementos
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ff9800',
    borderBottomWidth: 1,
    borderBottomColor: '#f57c00',
  },
  logo: {
    width: 50, // Ajusta el tamaño del logo según sea necesario
    height: 50,
    resizeMode: 'contain', // Asegura que el logo se ajuste al tamaño del contenedor
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffb74d',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});