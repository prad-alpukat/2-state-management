import { useState } from 'react'

export default function SectionCount() {

    const [count, setCount] = useState(0)

    return (
        <section className="container">
            <h2 className="font-bold text-2xl">
                section count
            </h2>
            <p>count: {count}</p>

            <button className="py-2 px-3 border-2 rounded-lg hover:bg-slate-500 mr-2"
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                tambah
            </button>
            <button className="py-2 px-3 border-2 rounded-lg hover:bg-slate-500"
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                kurang
            </button>
        </section>
    )
}