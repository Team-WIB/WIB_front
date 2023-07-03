import { useRouter } from "next/router";
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"

export default function DetailPage () {
    const router = useRouter();

    return (
        <>
            <Header />
            <Main />
        </>
    )
}