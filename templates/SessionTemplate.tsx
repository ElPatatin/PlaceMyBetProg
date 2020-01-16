import React from 'react'
import { GForm, IGFormProps } from "components";
import { View, Button, StyleSheet } from "react-native";


interface ISessionTemplate<T> {
    formProps: IGFormProps<T>
}

export default function SessionTemplate<T = any>({formProps}: ISessionTemplate<T>) {
    return (
        <View style={styles.container}>
            <GForm<T> 
                onSubmit={formProps.onSubmit}
                formElements={formProps.formElements}
                formTitle={formProps.formTitle}
                buttonSubmitTitle={formProps.buttonSubmitTitle}
                formExtraButtons={formProps.formExtraButtons}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  