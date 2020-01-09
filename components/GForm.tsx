import React from 'react'
import {IMarket} from 'types'
import { View, TextInput, Text, Button } from 'react-native'

export enum TypeOfInput {
    "password",
    "inputText",
    "checkBox",
}

interface IGFormElement {
    label: string,
    required: boolean,
    dataName: string,
    typeOfInput: TypeOfInput
}

interface IGFormProps<T>{
    onSubmit(formData: T): void,
    config: {
        elements: Array<IGFormElement>,
        buttonSubmitTitle?: string,
    }
}

export function GForm<T = any>({onSubmit, config}: IGFormProps<T>) {
    let result: any = {}

    const defaultSumbitTitle = "Submit"
    const beforeOnSubmit = () => {
        let validFlag = true

        config.elements.forEach(element => {
            const resultField = result[element.dataName]
            if ((resultField === undefined || resultField == "") && element.required){
                validFlag = false
            }
        });

        if(validFlag) {
            onSubmit(result)
        }
        else {
            alert("Debes rellenar todos los campos!")
        }
    }
    const FormElements = () => {
        let elements = config.elements.map((element) => {
            switch(element.typeOfInput){
                case TypeOfInput.checkBox:
    
                    break
                case TypeOfInput.password:
                    return (
                        <View>
                            <Text>{element.label}</Text>
                            <TextInput 
                                onChangeText={(text) => result[element.dataName] = text}
                                secureTextEntry={true}
                            />
                        </View>
                    )
                case TypeOfInput.inputText:
                    return (
                        <View>
                            <Text>{element.label}</Text>
                            <TextInput 
                                onChangeText={(text) => result[element.dataName] = text}
                                secureTextEntry={false}
                            />
                        </View>
                    )
            }
        })
        
        return <View>{elements}</View>
    } 
    

    return (
        <View>
            <FormElements/>
            <Button 
                title={config.buttonSubmitTitle === undefined? defaultSumbitTitle : config.buttonSubmitTitle}
                onPress={beforeOnSubmit}
            />
        </View>
    )
}


/** EJEMPLO DE FUNCIONAMIENTO

function login(user: string, pass: string) {

}

<GForm<{user: string, pass: string}> onSubmit={(result) => {
    login(result.user, result.pass)
}} config={{
    elements: [
        {dataName: "user", label: "Usuario", typeOfInput: "inputText", required: true},
        {dataName: "pass", label: "Contraseña", typeOfInput: "password", required: true}
    ],
    buttonSubmitTitle: "Logeate!"
}} /> **/