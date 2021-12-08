import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { StateService } from '../../services'

interface IOption {
    value: number
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
}

export function StateSelect({ onChange, value }: Props) {
    const [options, setOptions] = useState<IOption[]>([])
    const [loading, setLoader] = useState<boolean>(false)
    useEffect(() => {
        fetchColleges()
    }, [])
    async function fetchColleges() {
        setLoader(true)
        const stateService = new StateService()
        try {
            const states = await stateService.getStates()
            setOptions(
                states.map((_state) => {
                    return {
                        value: _state.id,
                        label: _state.name
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
            placeholder="Select state"
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
