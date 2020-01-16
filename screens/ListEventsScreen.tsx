import React, { useState, useEffect } from 'react'
import { ListObjTemplate } from 'templates'
import { EventsService } from 'servicies'
import { Text, View } from 'react-native'
import { IEvent } from 'types'


interface IComponentProps {
    event: IEvent
}

export default function ListEventsScreen() {
    return <ListObjTemplate 
        dataSource={() => EventsService.findAll().then(events =>
            events.map((event) =>
                <Text>{`${event.localTeam} | ${event.guestTeam}`}</Text>))}
        title="Eventos"
    />
        
} 