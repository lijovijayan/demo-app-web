import Axios from 'axios'
import { ENV } from '../config'
import { ICource, IFCource } from '../types'
import { FormatString } from '../utils'

export class CourceService {
    getCources(): Promise<ICource[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.cource.list)
                const cources: ICource[] = data
                resolve(cources)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCourcesWithFilter(filter: IFCource): Promise<ICource[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.cource.list)
                const cources: ICource[] = data
                resolve(cources)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCourceById(id: number): Promise<ICource> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(
                    FormatString(ENV.api.cource.list, id)
                )
                const cource: ICource = data
                resolve(cource)
            } catch (err) {
                reject(err)
            }
        })
    }
}
