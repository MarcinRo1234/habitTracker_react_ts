import { useState, type SubmitEvent } from "react"
import Button from "./Button"

export default function HabitForm() {
    const [name, setName] = useState("")
    function handleSubmit(e: SubmitEvent) {
        e.preventDefault()
        if(name.trim() === "") return
             setName("");
}

    return <form className="flex gap-2" onSubmit={handleSubmit}>
        <input placeholder="New habit" value={name} onChange={e => setName(e.target.value)} className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"/>
        <Button disabled={name.trim() === ""} className="rounded-lg px-4 py-2 font-medium" text="Add Habit"/>
    </form>
}