import PlaceMyBetDataSource from "./PlaceMyBetDataSource";

function login(user: string, password: string): Promise<boolean> {
    return PlaceMyBetDataSource({
        path:"usuarios",
        method:"GET",
        params:`Email=${user}`
    }).then(result => {
        if(result.length > 0 && result[0].Password == password) {
            return true
        }
        else return false
    })
}

export default {
    login: login
}