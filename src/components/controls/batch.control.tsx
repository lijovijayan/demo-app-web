import { Select } from 'antd'

interface IOption {
    value: any
    label: string
}
interface Props {
    value?: string
    onChange?: (value: string) => void
}

const options: IOption[] = [
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' }
]

export function BatchSelect({ onChange, value }: Props) {
    return (
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
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
