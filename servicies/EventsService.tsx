import PlaceMyBetDataSource from './PlaceMyBetDataSource'
import {IEvent} from 'types';

function findAll(): Promise<Array<IEvent>> {
    return PlaceMyBetDataSource({
        path:"eventos",
        method: "GET",
    }).then((response) => {
        return response.map(element => {
            return {
                id: element.IdEvento,
                localTeam: element.EquipoLocal,
                guestTeam: element.EquipoVisitante,
                startDate: element.InicioPartido,
                endData: element.FinalPartido
            }
        })
    })
}
function findOneById(id:number) {
    return PlaceMyBetDataSource({
        path:"eventos",
        method: "GET",
        params: `id=${id}`
    }).then((response) => {
        return response.map(element => {
            return {
                id: element.IdEvento,
                localTeam: element.EquipoLocal,
                guestTeam: element.EquipoVisitante,
                startDate: element.InicioPartido,
                endData: element.FinalPartido
            }
        })
    })
}

export default {
    findAll: findAll,
    findOneById: findOneById
}