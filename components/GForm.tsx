import React, { useState } from 'react'
import { View, Text, Switch,StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'


export enum TypeOfInput {
    "password",
    "inputText",
    "switch",
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


let preResult = {}
export function GForm<T = any>({onSubmit, formElements, formTitle, buttonSubmitTitle }: IGFormProps<T>) {
    
    const [result, setResult] = useState<any>({})
    const [submitPressed, setSubmitPressed] = useState(0)
    const submitTitle = buttonSubmitTitle === undefined? "Submit" : buttonSubmitTitle
    const defaultErrorMsg = "Debes rellenar este campo"


    function elementErrorMsg(element: IGFormElement) {
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
        let actualResult = {...result, ...preResult}
        setResult(actualResult)

        formElements.forEach(element => {
            const resultField = actualResult[element.dataName]
            if ((resultField === undefined || resultField == "") && element.required)
                validFlag = false
        });

        alert(validFlag)
        if(validFlag) {
            preResult={}
            setResult({})
            setSubmitPressed(0)
            onSubmit(actualResult)
        }
        else setSubmitPressed((prevValue) => prevValue + 1)
    }
    
    function FormElements() {
        let elements = formElements.map((element) => {
            switch(element.typeOfInput){
                case TypeOfInput.switch:
                    if(result[element.dataName] === undefined) result[element.dataName] = false
                    return (
                        <View key={element.dataName} style={{...styles.elementContainer, flexDirection: "row", justifyContent:"center"}}>
                            <Text style={{textAlignVertical: "center", marginRight:20}} >{element.label}</Text>
                            <Switch
                                onValueChange={value => {
                                    let newResult = {...result}
                                    newResult[element.dataName] = value
                                    setResult(newResult)
                                }}
                                value={result[element.dataName]}
                            />
                        </View>
                    )
                case TypeOfInput.password:
                    return <Input
                        key={element.dataName}      
                        containerStyle = {styles.elementContainer}
                        inputStyle= {styles.element}
                        errorMessage={elementErrorMsg(element)}
                        onChangeText={text => preResult[element.dataName] = text}
                        secureTextEntry={true}
                        label={element.label}
                        defaultValue={preResult[element.dataName]}
                />
                case TypeOfInput.inputText:
                    return <Input
                        key={element.dataName}
                        containerStyle = {styles.elementContainer}
                        inputStyle= {styles.element}
                        errorMessage={elementErrorMsg(element)}
                        onChangeText={text => preResult[element.dataName] = text}
                        secureTextEntry={false}
                        label={element.label}
                        defaultValue={preResult[element.dataName]}
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