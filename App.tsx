import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {IMarket, IEvent} from 'types'
import {GForm, TypeOfInput} from 'components'

export default function App() {
  return (
    <View style={styles.container}>
      <GForm<{user: string, pass: string}> 
        onSubmit={(result) => {
          alert(`Estas loggeado ${result.user}, con constraseña ${result.pass}`)
        }} config={{
          elements: [
              {dataName: "user", label: "Usuario", typeOfInput: TypeOfInput.inputText, required: true},
              {dataName: "pass", label: "Contraseña", typeOfInput: TypeOfInput.password, required: true}
          ],
          buttonSubmitTitle: "Logeate!"
        }}
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
