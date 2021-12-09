import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { CountryService } from '../../services'

interface IOption {
    value: number
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
}

export function CountrySelect({ onChange, value }: Props) {
    const [options, setOptions] = useState<IOption[]>([])
    const [loading, setLoader] = useState<boolean>(false)
    
    useEffect(() => {
        fetchCountries()
    }, [])
    
    async function fetchCountries() {
        setLoader(true)
        const countryService = new CountryService()
        try {
            const countries = await countryService.getCountries()
            setOptions(
                countries.map((_country) => {
                    return {
                        value: _country.id,
                        label: _country.name
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
            placeholder="Select country"
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
