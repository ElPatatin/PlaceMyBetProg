import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button, CheckBox } from 'react-native-elements'


export enum TypeOfInput {
    "password",
    "inputText",
    "checkBox",
}

interface IGFormElement {
    label: string,
    dataName: string,
    typeOfInput: TypeOfInput,
    required?: boolean
    errorMessage?: string
}

interface IGFormProps<T>{
    onSubmit(formData: T): void,
    formElements: Array<IGFormElement>,
    formTitle?: string
    buttonSubmitTitle?: string,
}


let result: any = {}
export function GForm<T = any>({onSubmit, formElements, formTitle, buttonSubmitTitle }: IGFormProps<T>) {
    
    const [submitPressed, setSubmitPressed] = useState(0)
    const submitTitle = buttonSubmitTitle === undefined? "Submit" : buttonSubmitTitle


    function elementErrorMsg(element: IGFormElement) {
        const defaultErrorMsg = "Debes rellenar este campo"

        if(submitPressed <= 0 || !element.required) return undefined
        if(result[element.dataName] === undefined || result[element.dataName] === "") {
            return element.errorMessage === undefined?
                defaultErrorMsg :
                element.errorMessage
        }
        else return undefined
    }

    function beforeOnSubmit() {
        let validFlag = true

        formElements.forEach(element => {
            const resultField = result[element.dataName]
            if ((resultField === undefined || resultField == "") && element.required)
                validFlag = false
        });

        if(validFlag) {
            let finalResult = {...result}
            result = {}
            setSubmitPressed(0)
            onSubmit(finalResult)
        }
        else setSubmitPressed((prevValue) => prevValue + 1)
    }
    
    function FormElements() {
        let elements = formElements.map((element) => {
            switch(element.typeOfInput){
                case TypeOfInput.checkBox:
                    result[element.dataName] = false
                    return <CheckBox
                        title={element.label}
                        checked={result[element.dataName]}
                        onPress={() => result[element.dataName] = !result[element.dataName]}
                        containerStyle={styles.elementContainer}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                    />
                case TypeOfInput.password:
                    return <Input
                        containerStyle = {styles.elementContainer}
                        inputStyle= {styles.element}
                        errorMessage={elementErrorMsg(element)}
                        onChangeText={(text) => result[element.dataName] = text}
                        secureTextEntry={true}
                        label={element.label}
                        defaultValue={result[element.dataName]}
                />
                case TypeOfInput.inputText:
                    return <Input
                        containerStyle = {styles.elementContainer}
                        inputStyle= {styles.element}
                        errorMessage={elementErrorMsg(element)}
                        onChangeText={(text) => result[element.dataName] = text}
                        secureTextEntry={false}
                        label={element.label}
                        defaultValue={result[element.dataName]}
                    />
            }
        })
        
        return <View style={styles.elementsContainer}>{elements}</View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{formTitle}</Text>
            <FormElements/>
            <Button 
                title={submitTitle}
                onPress={beforeOnSubmit}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 20,
        textAlign: "center"
    },
    elementsContainer: {},
    elementContainer: {
        width: 250,
        marginBottom: 15,
    },
    element: {}
})