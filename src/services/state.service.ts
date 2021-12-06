import Axios from 'axios'
import { ENV } from '../config'
import { IState, IFState } from '../types'

export class StateService {
    getStates(): Promise<IState[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.state.list)
                const states: IState[] = data
                resolve(states)
            } catch (err) {
                reject(err)
            }
        })
    }

    getStatesWithFilter(filter: IFState): Promise<IState[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.post(ENV.api.state.list, filter)
                const states: IState[] = data
                resolve(states)
            } catch (err) {
                reject(err)
            }
        })
    }

    getStateById(id: number): Promise<IState> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.state.list)
                const state: IState = data
                resolve(state)
            } catch (err) {
                reject(err)
            }
        })
    }
}
