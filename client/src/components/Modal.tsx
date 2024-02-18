import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { cc } from "../utils/cc"

export type ModalProps = {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const prevIsOpen = useRef<boolean>()
    useEffect(() => {
        function handler(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onClose()
            }
        }
        document.addEventListener("keydown", handler)
        return () => { document.removeEventListener("keydown", handler) }

    }, [onClose])
    useLayoutEffect(() => {
        if (!isOpen && prevIsOpen.current) {
            setIsClosing(true)
        }
        console.log("cater")
        prevIsOpen.current = isOpen
    }, [isOpen])

    if (!isOpen && !isClosing) return null

    return (
        createPortal(<div onAnimationEnd={() => setIsClosing(false)} className={cc("modal", isClosing && "closing")}>
            <div className="overlay" onClick={onClose} />
            <StaterCall />
            <div className="modal-body">{children}</div>
        </div>, document.querySelector("#modal-container") as HTMLElement)
    )
}

function StaterCall() {
    console.log("pillar")
    return <div></div>
}