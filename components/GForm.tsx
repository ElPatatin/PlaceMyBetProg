import {IMarket} from 'types'
import { View } from 'react-native'

interface IGFormElement {
    label: string,
    required: boolean,
    dataName: string,
    typeOfInput: "inputText" | "password" | "checkBox"
}

interface IGFormProps<T>{
    onSubmit(formData: T): void,
    config: {
        elements: Array<IGFormElement>,
        buttonSubmitTitle?: string,
    }
}

export default function GForm<T = any>({onSubmit, config}: IGFormProps<T>) {
    config.elements.map((element) => {
        return 
    })

    return <View></View>
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