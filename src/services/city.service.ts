import { ICity, IFCity } from '../types'
import Axios from 'axios'
import { ENV } from '../config'
import { FormatString } from '../utils'

export class CityService {
    getCities(): Promise<ICity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.city.list)
                const city: ICity[] = data
                resolve(city)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCitiesWithFilter(filter: IFCity): Promise<ICity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.post(ENV.api.city.list, filter)
                const city: ICity[] = data
                resolve(city)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCityById(id: number): Promise<ICity> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(
                    FormatString(ENV.api.city.list, id)
                )
                const city: ICity = data
                resolve(city)
            } catch (err) {
                reject(err)
            }
        })
    }
}
