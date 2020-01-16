import React from 'react';
import { TypeOfInput } from 'components'
import { SessionTemplate } from 'templates';
import { IGeneralScreenProps } from 'types' 
 

export default function LoginScreen({navigation}: IGeneralScreenProps) {
  return (
    <SessionTemplate<{user: string, pass: string, email: string}> 
      formProps={{
        onSubmit: result => alert("Funcionalidad no acabada"),
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
            label: "Email", 
            typeOfInput: TypeOfInput.inputText, 
            required: true
          }
        ],
        formExtraButtons: [{
          onPressButton:() => navigation.navigate("Login"),
          title:"¿Ya estas logeado?"
        }],
        buttonSubmitTitle:"Registrate!",
        formTitle:"Registro"
      }}
    />
  );
}