import { useEffect, useRef } from 'react'

export function useChartUpdate() {
    const chartRef = useRef<any>()
    useEffect(() => {
        // function onSizeChange() {
        //     console.log('on update')
        //     chartRef.current && chartRef.current.render()
        // }
        // window.addEventListener('resize', onSizeChange)
        // onSizeChange()
        // return () => window.removeEventListener('resize', onSizeChange)
    }, [])
    return chartRef
}
