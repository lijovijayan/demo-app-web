export function FormatString(str: string, ...val: any[]): string {
    let _str = str
    for (let index = 0; index < val.length; index += 1) {
        _str = _str?.replace(`{${index}}`, val[index])
    }
    return _str
}

export function subString(str: string, start: string, end: string): string {
    return str.substring(str.indexOf(start) + 1, str.lastIndexOf(end))
}
