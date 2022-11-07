import { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";

import { GithubContext } from "contexts/GithubContext";

export default function WelcomePage() {
    const { username, dataUser, getDataRepos, isLoading } = useContext(GithubContext);
    const [unameInput, setUnameInput] = useState('')

    return (
        <div className="bg-slate-500 flex justify-center items-center px-2 md:px-12 py-12 h-screen">
            <main className="md:p-8 bg-white shadow-md rounded-md w-full max-w-xl p-4">
                <section className="text-center">
                    <img
                        alt="..."
                        className="w-auto mx-auto h-14"
                        src={require("assets/images/icons/GitHub-Mark.png")}
                    />
                    <h1 className="text-2xl font-bold text-slate-900">GitHub Repos</h1>
                </section>
                <section className="text-center my-6 flex justify-center">
                    <input onChange={e => setUnameInput(e.target.value)} type="text" placeholder="Username..." className="bg-slate-50 border border-slate-600 rounded-full w-full px-6 py-2 max-w-sm mr-2"/>
                    <button type="button" disabled={isLoading} onClick={() => getDataRepos({username: unameInput})} className="flex bg-slate-800 text-white text-md items-center px-4 rounded-full">
                        {!isLoading ? (<><IoSearch className="mr-1"/> Cari</>) : '.............'}
                    </button>
                </section>
                <hr/>
                <section className="text-center mt-4 md:-mb-4">
                    <h1 className="text-xs font-semibold text-slate-600">Created by Dimas Setiawan</h1>
                </section>
            </main>
        </div>
    )
}