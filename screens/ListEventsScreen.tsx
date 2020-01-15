import React from 'react'
import { ListObjTemplate } from 'templates'
import { EventsService } from 'servicies'
import { Text, View } from 'react-native'
import { func } from 'prop-types'

function Component({texte}) {
    return <Text>{texte}</Text> 
}


export default function ListEventsScreen() {
    return <ListObjTemplate 
        dataSource={() => {
            return EventsService.findAll().then(events => {
                return events.map((event,pos) => <Component texte ={event}/>)
            })
        }}
        title="Eventos"
    />
        
} 