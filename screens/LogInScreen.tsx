import React from 'react';
import { StyleSheet, View } from 'react-native';
import {GForm, TypeOfInput } from 'components'

export default function LoginScreen() {
  const login = (user: string, pass: string, remember: boolean) => {
    alert(`Estas loggeado ${user}, con constraseña ${pass} recuerdame: ${remember}`)
  }

  return (
    <View style={styles.container}>
      <GForm<{user: string, pass: string, remember: boolean}> 
        onSubmit={ result => login(result.user, result.pass, result.remember) }
        formElements={[
          {
            dataName: "user",
            label: "Usuario", 
            typeOfInput: TypeOfInput.inputText, 
            required: true},
          {
            dataName: "pass",
            label: "Contraseña",
            typeOfInput: TypeOfInput.password, 
            required: true
          },
          {
            dataName: "remember", 
            label: "Recordar contraseña", 
            typeOfInput: TypeOfInput.switch, 
            required: false
          },
        ]}
        buttonSubmitTitle="Log In!"
        formTitle="Log in"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
