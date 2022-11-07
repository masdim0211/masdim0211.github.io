import { useContext } from "react";
import { IoCodeSlash } from "react-icons/io5";
import PropTypes from "prop-types";

import { GithubContext } from "contexts/GithubContext";
import { Link } from "react-router-dom";

export default function TableSection() {
    const { username, photoUser, dataUser } = useContext(GithubContext);

    return (
        <section className="bg-white shadow-md rounded-md w-full max-w-xl p-4 mx-auto">
            <section className="flex justify-between">
                <h1 className="text-sm font-bold text-slate-900">Respository</h1>
                <section className="flex">
                    <img
                        alt="..."
                        className="w-auto h-6 mr-1 rounded-full"
                        src={photoUser}
                    />
                    <h1 className="text-sm font-semibold text-slate-900">{username}</h1>
                </section>
            </section>
            <hr className="my-4"/>
            <section>
                {dataUser.map((value, key) => (
                    <a key={key} href={value.html_url} className="shadow flex items-center p-2 rounded-md mb-2">
                        <div className="flex-1">
                            <h1 className="font-semibold text-base">{value.name}</h1>
                            <p className="text-sm font-md text-slate-900">{value.description}</p>
                        </div>
                        <div className="flex items-center bg-slate-800 text-white px-2 py-1 rounded-full ml-2">
                            <IoCodeSlash className="mr-1 text-sm"/>
                            <p className="text-xs">{value.language}</p>
                        </div>
                    </a>
                ))}
            </section>
        </section>
    )
}
