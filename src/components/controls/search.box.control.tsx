import { useEffect, useState } from 'react'
import { Input } from 'antd'

interface Props {
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    allowClear?: boolean
}
export function SearchBox({
    onChange,
    value = '',
    allowClear,
    placeholder = ''
}: Props) {
    const [searchKey, setSearchKey] = useState('')

    useEffect(() => {
        setSearchKey(value)
    }, [value])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange && onChange(searchKey)
        }, 400)
        return () => {
            clearTimeout(timeout)
        }
    }, [onChange, searchKey])

    return (
        <Input.Search
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder={placeholder}
            allowClear={allowClear}
        />
    )
}
