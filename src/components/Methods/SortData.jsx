export default function SortData(data) {

    const readmass = []
    const notreadmass = []

    data.forEach(item => {
        item.status ? readmass.push(item) : notreadmass.push(item)
    });

    readmass.sort((a, b) => new Date(a.date - b.date))
    notreadmass.sort((a, b) => new Date(a.date - b.date))

    let sortread = readmass.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)
    let sortnotread = notreadmass.sort((a, b) => Date.parse(a.date) < Date.parse(b.date) ? 1 : -1)

    return [...sortread, ...sortnotread]

}

