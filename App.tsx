import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IMarket, IEvent} from 'types'
import {GForm, TypeOfInput } from 'components'

export default function App() {
  const login = (user: string, pass: string) => {
    alert(`Estas loggeado ${user}, con constraseña ${pass}`)
  }

  return (
    <View style={styles.container}>
      <GForm<{user: string, pass: string}> 
        onSubmit={(result) => { login(result.user, result.pass) }}
        formElements={[
            {dataName: "user", label: "Usuario", typeOfInput: TypeOfInput.inputText, required: true},
            {dataName: "pass", label: "Contraseña", typeOfInput: TypeOfInput.password, required: true}
        ]}
        buttonSubmitTitle="Logeate!"
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
