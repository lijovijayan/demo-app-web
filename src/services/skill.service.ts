import Axios from 'axios'
import { ENV } from '../config'
import { IFSkill, ISkill } from '../types'

export class SkillService {
    getSkills(): Promise<ISkill[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.skill.list)
                const skills: ISkill[] = data
                resolve(skills)
            } catch (err) {
                reject(err)
            }
        })
    }

    getSkillsWithFilter(filter: IFSkill): Promise<ISkill[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.post(ENV.api.skill.list, filter)
                const skills: ISkill[] = data
                resolve(skills)
            } catch (err) {
                reject(err)
            }
        })
    }

    getSkillById(id: number): Promise<ISkill> {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await Axios.get(ENV.api.skill.list)
                const skill: ISkill = data
                resolve(skill)
            } catch (err) {
                reject(err)
            }
        })
    }
}
