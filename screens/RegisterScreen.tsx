import React from 'react';
import { StyleSheet, View } from 'react-native';
import {GForm, TypeOfInput } from 'components'
import { SessionTemplate } from 'templates';

export default function LoginScreen() {
  const login = (user: string, pass: string, remember: boolean) => {
    alert(`Estas loggeado ${user}, con constraseña ${pass} recuerdame: ${remember}`)
  }

  return (
    <SessionTemplate<{user: string, pass: string, remember: boolean}> 
      formProps={{
        onSubmit: result => login(result.user, result.pass, result.remember),
        formElements:[
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
          }
        ],
        buttonSubmitTitle:"Log In!",
        formTitle:"Log in"
      }}
      lowerButtonTitle="¿No estas registrado?"
      onPressLowerButton={() => {}}
    />
  );
}