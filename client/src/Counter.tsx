import { useState, memo } from 'react'

function Component({ initialCount }: { initialCount: number }) {
    const [value, setValue] = useState(initialCount)


    return (
        <>
            <button onClick={() => setValue(v => v + 1)}>+</button>
            {value}
            <button onClick={() => setValue(v => v - 1)}>-</button>
        </>
    )
}

export const Counter = memo(Component)
