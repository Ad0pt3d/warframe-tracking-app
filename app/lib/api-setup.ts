interface WarframeData {
    name: string
    description: string
    shield: number
    polarities: Array<string>
    color: number
    conclave: boolean
    speed: string
    aura: string
    power: number
    info: string
    thumbnail: string
    mr: string
    url: string
    regex: string
    armor: number
    location: string
}

let name_of_warframe: Array<string>
let health_of_warframe: Array<number>


async function getWarframeData() {
    const res = await fetch('https://api.warframestat.us/warframes')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function useWarframeData() {
    const data = await getWarframeData();

    let warframe_names = data.map((wf: {name: string}) => wf.name);
    let warframe_health = data.map((wf: {health: number}) => wf.health);

    warframe_names.forEach((key: string)=> {
        name_of_warframe.push(key)
    })

    warframe_health.forEach((key: any)=> {
        health_of_warframe.push(key)
    })

    return console.log(`${name_of_warframe}: ${health_of_warframe}`)
}


