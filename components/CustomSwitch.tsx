import React from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'


interface ICustomSwitchProps {
    style: any,
    onValueChange(value: boolean): void,
    value: boolean,
    label: string
}

export default function CustomSwitch ({style, onValueChange, value, label }: ICustomSwitchProps) {
    return (
        <View style={{...styles.container, ...style}}>
            <Text style={styles.text}>{label}</Text>
            <Switch
                onValueChange={onValueChange}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        justifyContent:"center"
    },
    text: {
        textAlignVertical: "center",
        marginRight:20
    }
})