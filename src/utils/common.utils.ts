import randomColor from 'randomcolor'
import { subString } from './string.utils'

export function getColorWithOpacity() {
    const color = randomColor({
        format: 'rgb'
    })
    const colorWithOpacity = `rgba(${subString(color, '(', ')')}, 0.2)`
    return {
        color,
        colorWithOpacity
    }
}
