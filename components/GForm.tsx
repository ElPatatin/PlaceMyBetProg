import React, {useState, useEffect} from 'react'
import { View, Button, Text } from 'react-native'
import { GFormInput } from 'components'

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
    const [SubmitPressed, setSubmitPressed] = useState(false)
    const defaultSumbitTitle = "Submit"

    function elementErrorMsg(element: IGFormElement) {
        const defaultErrorMsg = "Debes rellenar este campo"

        if(!SubmitPressed || !element.required) return undefined
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
            if ((resultField === undefined || resultField == "") && element.required) validFlag = false
        });

        if(validFlag) onSubmit(result)
    }
    function FormElements() {
        let elements = formElements.map((element) => {
            switch(element.typeOfInput){
                case TypeOfInput.checkBox:
    
                    break
                case TypeOfInput.password:
                    return <GFormInput
                        label={element.label}
                        onChangeText={(text) => result[element.dataName] = text}
                        password={true}
                        value={result[element.dataName]}
                        errorMessage={elementErrorMsg(element)}
                    />
                case TypeOfInput.inputText:
                    return <GFormInput
                        label={element.label}
                        onChangeText={(text) => result[element.dataName] = text}
                        password={false}
                        value={result[element.dataName]}
                        errorMessage={elementErrorMsg(element)}
                    />
            }
        })
        
        return <View>{elements}</View>
    }
    function render(){
        if (formTitle === undefined) {
            return (
                <View>
                    <FormElements/>
                    <Button 
                        title={buttonSubmitTitle === undefined? defaultSumbitTitle : buttonSubmitTitle}
                        onPress={() =>{beforeOnSubmit(); setSubmitPressed(true)}}
                    />
                </View>
            )
        }
        else return(
            <View>
                <Text>{formTitle}</Text>
                <FormElements/>
                <Button 
                    title={buttonSubmitTitle === undefined? defaultSumbitTitle : buttonSubmitTitle}
                    onPress={() =>{beforeOnSubmit(); setSubmitPressed(true)}}
                />
            </View>
        )
    }

    return render()
}