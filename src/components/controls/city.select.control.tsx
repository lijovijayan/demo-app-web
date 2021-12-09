import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { CityService } from '../../services'
import { IFCity } from '../../types'

interface IOption {
    value: number
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
    filter?: IFCity
}

export function CitySelect({ onChange, value, filter = {} }: Props) {
    const [options, setOptions] = useState<IOption[]>([])
    const [loading, setLoader] = useState<boolean>(false)

    useEffect(() => {
        fetchCities()
    }, [filter.country_id, filter.state_id])

    async function fetchCities() {
        setLoader(true)
        const cityService = new CityService()
        try {
            const cities = await cityService.getCitiesWithFilter(filter)
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
