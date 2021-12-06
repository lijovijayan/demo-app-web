import Axios from 'axios'
import { ENV } from '../config'
import { IStudent, IFStudent, IPaginatedResponse } from '../types'

export class StudentService {
    getStudents(): Promise<IStudent[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.student.list)
                const students: IStudent[] = data
                resolve(students)
            } catch (err) {
                reject(err)
            }
        })
    }

    getStudentsWithFilter(
        filter: IFStudent
    ): Promise<IPaginatedResponse<IStudent[]>> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.post(ENV.api.student.list, filter)
                const response: IPaginatedResponse<IStudent[]> = data
                resolve(response)
            } catch (err) {
                reject(err)
            }
        })
    }

    getStudentById(id: number): Promise<IStudent> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.student.list)
                const student: IStudent = data
                resolve(student)
            } catch (err) {
                reject(err)
            }
        })
    }
}
