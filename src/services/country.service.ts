import Axios from 'axios'
import { ENV } from '../config'
import { ICountry, IFCountry } from '../types'
import { FormatString } from '../utils'

export class CountryService {
    getCountries(): Promise<ICountry[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.country.list)
                const countries: ICountry[] = data
                resolve(countries)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCountriesWithFilter(filter: IFCountry): Promise<ICountry[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.post(ENV.api.country.list, filter)
                const countries: ICountry[] = data
                resolve(countries)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCountryById(id: number): Promise<ICountry> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(
                    FormatString(ENV.api.country.list, id)
                )
                const country: ICountry = data
                resolve(country)
            } catch (err) {
                reject(err)
            }
        })
    }
}
