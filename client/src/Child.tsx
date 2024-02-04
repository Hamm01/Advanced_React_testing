
type ChildType = {
    name: string
}

// Below are two ways how can set types for props first is using type  assigning directly to props in function

// next function we need to pass as React.Fc, in which we pass the type as generic


export default function Child({ name }: ChildType) {
    return (
        <h1>{name}</h1>
    )
}


export const Child1: React.FC<ChildType> = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}
