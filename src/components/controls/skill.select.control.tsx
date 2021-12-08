import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { SkillService } from '../../services'

interface IOption {
    value: number
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
}

export function SkillSelect({ onChange, value }: Props) {
    const [options, setOptions] = useState<IOption[]>([])
    const [loading, setLoader] = useState<boolean>(false)
    useEffect(() => {
        fetchColleges()
    }, [])
    async function fetchColleges() {
        setLoader(true)
        const skillService = new SkillService()
        try {
            const skills = await skillService.getSkills()
            setOptions(
                skills.map((_skill) => {
                    return {
                        value: _skill.id,
                        label: _skill.name
                    }
                })
            )
        } catch {
            setOptions([])
        } finally {
            setLoader(false)
        }
    }

    return (
        <Select
            showSearch
            allowClear
            loading={loading}
            placeholder="Select skill"
            onChange={onChange}
            options={options}
            value={value}
            filterOption={(input: string, option: any) =>
                option?.label
                    ?.toLowerCase()
                    ?.startsWith(input.toLocaleLowerCase())
            }
        ></Select>
    )
}
