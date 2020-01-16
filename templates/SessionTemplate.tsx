import React from 'react'
import { GForm, IGFormProps } from "components";
import { View, Button, StyleSheet } from "react-native";


interface ISessionTemplate<T> {
    lowerButtonTitle: string,
    formProps: IGFormProps<T>,
    onPressLowerButton() : void
}

export default function SessionTemplate<T = any>({lowerButtonTitle, formProps, onPressLowerButton}: ISessionTemplate<T>) {
    return (
        <View style={styles.container}>
            <GForm<T> 
                onSubmit={formProps.onSubmit}
                formElements={formProps.formElements}
                formTitle={formProps.formTitle}
                buttonSubmitTitle={formProps.buttonSubmitTitle}
            />
            <Button title={lowerButtonTitle} onPress={onPressLowerButton}/>
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
  