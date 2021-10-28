const getName = (f_name, l_name) => {
    return `${f_name} ${l_name}`
}

const getAge = (day, month, year) => {
    return (new Date().getUTCFullYear()) - (new Date(year, month, day).getUTCFullYear())
}

module.exports = {
    age: getAge,
    name: getName
}