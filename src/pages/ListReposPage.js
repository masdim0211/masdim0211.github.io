import { useContext, useEffect } from "react";

import { GithubContext } from "contexts/GithubContext";
import HeaderSection from "./ListReposPage/HeaderSection";
import TableSection from "./ListReposPage/TableSection";
import history from "utils/history";

export default function ListReposPage() {
    const { username, photoUser, dataUser } = useContext(GithubContext);

    useEffect(() => {
      (() => {
        if (username === null || dataUser === null || photoUser === null) {
            history.push('/home')
        }
      })()
    }, [])
    

    return (
        <div className="bg-slate-500 px-2 md:px-12 py-2 min-h-screen w-full">
            <HeaderSection/>
            <TableSection/>
        </div>
    )
}