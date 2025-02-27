import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const DetalleProducto = () => {
  const producto = {
    nombre: "Pez Divertido para Perros",
    precio: "$249.99",
    descripcion: "Un juguete interactivo y resistente para la diversión de tu mascota.",
    imagen: "https://imgs.search.brave.com/c_IJ2askcCdZ1JEQEfDegZAbWYAmQJnEpXF0AztVNkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wb29k/bGV0b3lmYW1zaG9w/LmVzL2Nkbi9zaG9w/L2ZpbGVzL1Blel9E/aXZlcnRpZG9fcGFy/YV9QZXJyb3MuanBn/P3Y9MTczNjgwMjQ1/MyZ3aWR0aD0xNDQ1",
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Image source={{ uri: producto.imagen }} style={styles.imagen} />
          <Text style={styles.nombre}>{producto.nombre}</Text>
          <Text style={styles.precio}>{producto.precio}</Text>
          <Text style={styles.descripcion}>{producto.descripcion}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    formContainer: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // Cambia aquí
      width: "100%",
      maxWidth: 400,
      alignItems: "center",
    },
    imagen: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginBottom: 15,
    },
    nombre: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
    },
    precio: {
      fontSize: 20,
      color: "#ff7043",
      fontWeight: "bold",
      marginVertical: 5,
    },
    descripcion: {
      fontSize: 14,
      color: "gray",
      textAlign: "center",
      marginBottom: 10,
    },
  });

export default DetalleProducto;