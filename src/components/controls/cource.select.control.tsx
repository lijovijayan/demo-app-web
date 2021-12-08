import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { CourceService } from '../../services'

interface IOption {
    value: number
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
}

export function CourceSelect({ onChange, value }: Props) {
    const [options, setOptions] = useState<IOption[]>([])
    const [loading, setLoader] = useState<boolean>(false)
    useEffect(() => {
        fetchColleges()
    }, [])
    async function fetchColleges() {
        setLoader(true)
        const courceService = new CourceService()
        try {
            const cources = await courceService.getCources()
            setOptions(
                cources.map((_cource) => {
                    return {
                        value: _cource.id,
                        label: _cource.name
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
            placeholder="Select cource"
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
