
const ITEMS = Array.from(Array(10000).keys())

export function List() {
    return (
        <ul style={{ width: "200px", height: "200px", overflow: "auto" }}>
            {ITEMS.map(i => (
                <ListItem key={i} item={i} />
            ))}

        </ul>)
}

function ListItem({ item }: any) {

    return <li>{item}</li>
}

