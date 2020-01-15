import React from 'react'
import { FlatList } from "react-native";

interface IListObjProps {
    dataSource(): Array<JSX.Element>
}

export default function ListObjTemplate ({dataSource}:IListObjProps) {
    return (
        <FlatList
            data={dataSource()}
            renderItem={({ item }) =>  item }
            keyExtractor={(item, index) => index.toString()}
        />
    )
}