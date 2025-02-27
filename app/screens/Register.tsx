import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RegisterScreen  = () => {
  const [username, setUsername] = useState("");
  const [realName, setRealName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");

  const handleRegister = () => {
    // Aquí puedes manejar el registro (validaciones, enviar datos al servidor, etc.)
    console.log("Registro", { username, realName, lastName, phone, email, password, confirmPassword, securityQuestion, securityAnswer });
  };

  const handleCancel = () => {
    // Aquí puedes manejar la cancelación (limpiar el formulario o redirigir)
    console.log("Registro cancelado");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>REGISTRO</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre de Usuario</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="user" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Nombre de Usuario"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre Real</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="user" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Nombre Real"
                style={styles.input}
                value={realName}
                onChangeText={setRealName}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Apellido Paterno</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="user" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Apellido Paterno"
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Numero de teléfono</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="phone" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Teléfono"
                style={styles.input}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo Electrónico</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="envelope" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Correo Electrónico"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Contraseña"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar contraseña</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Confirmar Contraseña"
                style={styles.input}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Elija una Pregunta Secreta</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="question-circle" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Pregunta Secreta"
                style={styles.input}
                value={securityQuestion}
                onChangeText={setSecurityQuestion}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Respuesta</Text>
            <View style={styles.inputWrapper}>
              <FontAwesome name="question-circle" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Respuesta"
                style={styles.input}
                value={securityAnswer}
                onChangeText={setSecurityAnswer}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>¿Ya tienes una cuenta? </Text>
            <TouchableOpacity>
              <Text style={[styles.linkText, styles.linkHighlight]}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
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
    padding: 40,
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: "100%",
    maxWidth: 400,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff7043",
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: "gray",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff7043",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  linkText: {
    fontSize: 14,
    color: "black",
  },
  linkHighlight: {
    color: "#ff7043",
  },
});

export default RegisterScreen ;