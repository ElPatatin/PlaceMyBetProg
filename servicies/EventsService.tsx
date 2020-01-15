import PlaceMyBetDataSource from './PlaceMyBetDataSource'
import {IEvent} from 'types';

function findAll(): Promise<Array<IEvent>> {
    return PlaceMyBetDataSource({
        path:"eventos",
        method: "GET",
    })
}

export default {
    findAll: findAll
}