import React from 'react'
import { Input } from 'react-native-elements'


interface IFormInputProps {
    label: string,
    onChangeText(text: string): void,
    value?: string
    password?: boolean,
    errorMessage? : string
}

export default function GFormInput({label, onChangeText, password, errorMessage, value}: IFormInputProps) {
    return <Input
        errorMessage={errorMessage}
        onChangeText={onChangeText}
        secureTextEntry={password}
        label={label}
        value={value}
    />
}