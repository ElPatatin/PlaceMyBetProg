import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, StyleSheet } from "react-native";

interface IListObjProps {
    title: string,
    dataSource(): Promise<Array<JSX.Element>>
}

export default function ListObjTemplate ({dataSource, title}:IListObjProps) {
    const [data, setData] = useState<Array<JSX.Element>>([])

    useEffect(() => {
        dataSource().then(dataFromSource => {
            setData(dataFromSource)
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <FlatList 
                data={data}
                renderItem={({item}) => item}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
  