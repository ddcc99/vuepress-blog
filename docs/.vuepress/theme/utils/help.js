export function getRgba(rgb, opacity) {
    return rgb.replace(')', `, ${opacity})`)
}

export function sortByDate(list) {
    return list.sort((a, b) => a.postTime > b.postTime)
}
