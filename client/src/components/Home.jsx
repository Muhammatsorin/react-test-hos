import React from 'react'
import Navbar from './Navbar'

function Home() {
    return (
        <main class="p-8">
            <Navbar />
            <div class="p-4 flex flex-col text-center justify-center font-black text-sky-600">
                <h1 class="subpixel-antialiased font-mono text-5xl mt-10">Saiburi Crown Prince Hospital</h1>
                <h3 class="font-mono text-2xl pt-5">Registration</h3>
            </div>
        </main>
    )
}

export default Home