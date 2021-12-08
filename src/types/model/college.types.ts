import { ICity, IState, ICountry, ICource } from '.'
import { IPagination } from '../common.types'

export interface ICollege {
    id: number
    name: string
    year_founded: number
    city: number
    state: number
    country: number
    students: number[]
    cources: number[]
}

export interface ICollegeObject {
    id: number
    name: string
    year_founded: number
    city: ICity
    state: IState
    country: ICountry
    students: number[]
    cources: ICource[]
}

export interface IFCollege extends Partial<ICollege> {
    pagination: IPagination
}
