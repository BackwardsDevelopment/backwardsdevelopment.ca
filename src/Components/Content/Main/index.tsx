// import {Card} from "./Card";

function AboutBD() {
    return (
        <div className="text-800 dark:text-white">
            <h2 className="text-5xl mb-5">Backwards Development</h2>
            <div className="ml-5">
                <h3 className="text-3xl mb-2">Who we are</h3>
                <p className="text-xl ml-2">Backwards Development is a coding organization formed by <a className="dark:text-sky-400" href="#alexander">Alexander Harding</a> AKA <a className="dark:text-sky-400" href="https://github.com/backwardsuser/">BackwardsUser</a>.</p>
            </div>
        </div>
    )
}

function MainPage() {
    return(
        <div className="m-10">
            <AboutBD />
        </div>
    )
}

export {
    MainPage
}