import Axios from 'axios'
import { ENV } from '../config'
import {
    ICollege,
    IFCollege,
    IPaginatedResponse,
    ICollegeObject
} from '../types'
import { FormatString } from '../utils'

export class CollegeService {
    getColleges(): Promise<ICollegeObject[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.college.list)
                const colleges: ICollegeObject[] = data
                resolve(colleges)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCollegesWithFilter(
        filter: IFCollege
    ): Promise<IPaginatedResponse<ICollegeObject[]>> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.post(ENV.api.college.list, filter)
                const colleges: IPaginatedResponse<ICollegeObject[]> = data
                resolve(colleges)
            } catch (err) {
                reject(err)
            }
        })
    }

    getCollegeById(id: number): Promise<ICollege> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(
                    FormatString(ENV.api.college.list, id)
                )
                const college: ICollege = data
                resolve(college)
            } catch (err) {
                reject(err)
            }
        })
    }
}
