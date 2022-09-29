
export const search = async (type: string, value: string) => {
    try {
        const res = await fetch(`/api/${type}?search=${value}`)
        const json = await res.json()
        return json
    } catch(error) {
        console.error(error)
    }

    return null
}