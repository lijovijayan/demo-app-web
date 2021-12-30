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

export function disableAutoComplete() {
    setTimeout(() => {
        document.querySelectorAll('input').forEach((e) => {
            e.setAttribute('autocomplete', 'demo-app-prevent-autocomplete')
        })
    }, 1000)
}
