import { useState, memo } from 'react'

function Component({ initialCount, otherProp }: { initialCount: number, otherProp: string }) {
    const [value, setValue] = useState(initialCount)


    return (
        <>
            {otherProp}
            <button onClick={() => setValue(v => v + 1)}>+</button>
            {value}
            <button onClick={() => setValue(v => v - 1)}>-</button>
        </>
    )
}

export const Counter = memo(Component, (prevProps, newProps) => {
    return prevProps.otherProp === newProps.otherProp
})
