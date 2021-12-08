import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { CityService } from '../../services'

interface IOption {
    value: number
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
}

export function CitySelect({ onChange, value }: Props) {
    const [options, setOptions] = useState<IOption[]>([])
    const [loading, setLoader] = useState<boolean>(false)
    useEffect(() => {
        fetchColleges()
    }, [])
    async function fetchColleges() {
        setLoader(true)
        const cityService = new CityService()
        try {
            const cities = await cityService.getCities()
            setOptions(
                cities.map((_city) => {
                    return {
                        value: _city.id,
                        label: _city.name
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
            placeholder="Select city"
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
