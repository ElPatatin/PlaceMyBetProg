import React from 'react';
import { TypeOfInput } from 'components'
import { SessionTemplate } from 'templates';
import { SessionService } from 'servicies';
import { IGeneralScreenProps } from 'types' 


export default function LoginScreen({navigation}: IGeneralScreenProps) {
  return (
    <SessionTemplate<{user: string, pass: string, remember: boolean}> 
      formProps={{
        onSubmit: result => SessionService.login(result.user, result.pass).then( result => {
          if(result) navigation.navigate("Events"); else alert("Contraseña incorrecta")
        }),
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
        formExtraButtons: [{
          onPressButton:() => navigation.navigate("Register"),
          title:"¿No estas logeado?"
        }],
        buttonSubmitTitle:"Log In!",
        formTitle:"Log in"
      }}
    />
  );
}