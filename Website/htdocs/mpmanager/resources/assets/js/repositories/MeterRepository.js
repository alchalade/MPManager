import Client from './Client/AxiosClient'
const resource = '/api/meters'


export default {

    geoList(miniGridId){
        return Client.get(`${resource}/${miniGridId}/geoList`)
    },
    get(meterId){
        return Client.get(`${resource}/${meterId}/all`)
    },
    update(meters){
        return Client.put(`${resource}`,meters)
    }
}
