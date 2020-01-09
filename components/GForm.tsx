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
    }

    
    let elements = config.elements.map((element) => {        
        switch(element.typeOfInput){
            case typeOfInput.checkBox:

                break
            case typeOfInput.password:
                return (
                    <View>
                        <Text>{element.label}</Text>
                        <TextInput 
                            onChangeText={(text) => result[element.dataName] = text}
                            secureTextEntry={true}
                        />
                    </View>
                )
                break
            case typeOfInput.inputText:
                return(
                    <View>
                        <Text>{element.label}</Text>
                        <TextInput 
                            onChangeText={(text) => result[element.dataName] = text}
                            secureTextEntry={false}
                        />
                    </View>
                )
                break
        }
    })

    return (
        <View>
            {elements}
            <Button 
                title={config.buttonSubmitTitle === undefined? "Submit" : config.buttonSubmitTitle}
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