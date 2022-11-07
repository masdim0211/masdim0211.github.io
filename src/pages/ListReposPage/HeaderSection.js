import { useContext } from "react";
import { IoArrowBack, IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";

import { GithubContext } from "contexts/GithubContext";
import { Link } from "react-router-dom";

export default function HeaderSection() {
    return (
        <section className="bg-white shadow-md rounded-md w-full max-w-xl p-4 mx-auto mb-2">
            <section className="flex items-center justify-between">
                <Link to="/home">
                    <IoArrowBack className="mr-1 text-lg"/>
                </Link>
                <section className="flex">
                    <img
                        alt="..."
                        className="w-auto h-6 mr-1"
                        src={require("assets/images/icons/GitHub-Mark.png")}
                    />
                    <h1 className="text-lg font-bold text-slate-900">GitHub Repos</h1>
                </section>
                <div/>
            </section>
        </section>
    )
}
