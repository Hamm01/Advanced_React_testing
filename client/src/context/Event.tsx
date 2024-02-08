import { ReactNode, createContext, useState } from 'react'

export const EVENT_COLORS = ["red", 'blue', 'green'] as const

type Event = {
    id: string
    name: string
    color: (typeof EVENT_COLORS)[number]
    date: Date
} &
    ({ allDay: false, startTime: string, endTime: string } | { allDay: true, startTime?: never, endTime?: never })


type EventsContext = {
    events: Event[]
    addEvent: (event: UnionOmit<Event, "id">) => void
}


const Context = createContext<EventsContext | null>(null)

type EventsProviderProps = {
    children: ReactNode
}

export function EventsProvider({ children }: EventsProviderProps) {
    const [events, setEvents] = useState<Event[]>([])
    return <Context.Provider value={{ events }}>{children}</Context.Provider>
}
