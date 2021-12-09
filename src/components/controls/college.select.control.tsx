import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { CollegeService } from '../../services'

interface IOption {
    value: number
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
}

export function CollegeSelect({ onChange, value }: Props) {
    const [options, setOptions] = useState<IOption[]>([])
    const [loading, setLoader] = useState<boolean>(false)
    
    useEffect(() => {
        fetchColleges()
    }, [])

    async function fetchColleges() {
        setLoader(true)
        const collegeService = new CollegeService()
        try {
            const colleges = await collegeService.getColleges()
            setOptions(
                colleges.map((_college) => {
                    return {
                        value: _college.id,
                        label: _college.name
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
            placeholder="Select college"
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
