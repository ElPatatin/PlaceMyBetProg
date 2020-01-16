interface IDataSourceProps {
    path: string,
    method: "POST" | "GET" | "PUT" | "DELETE"
    params?: string,
    body?: any
}

export default function PlaceMyBetDataSource({path, method, params, body} : IDataSourceProps): Promise<any> {
    const baseUrl = "http://localhost:3000";

    return fetch(`${baseUrl}/${path}${params? `?${params}` : ''}`, {
        method: method,
        body: body? JSON.stringify(body) : undefined,
        headers: body? {
            'Content-Type': 'application/json'
        } : undefined
    }).then(response => {
        if(response.ok) {
            return response.json()
        }
        else throw "response is not ok";
    }).catch(error => {
        console.log(error)
    })
}