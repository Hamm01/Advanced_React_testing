import { useContext } from "react"
import { Context } from "./Event"
export const EVENT_COLORS = ["red", 'blue', 'green'] as const

export function useEvents() {
    const value = useContext(Context)
    if (value == null) throw new Error("useEvents must be used with in Eventsprovider")
    return value
}