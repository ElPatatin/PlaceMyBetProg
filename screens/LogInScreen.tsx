import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {GForm} from 'components' 

export default function LogIn() {
    return(
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItem: 'center',
        justifyContent: 'center',
    },
});