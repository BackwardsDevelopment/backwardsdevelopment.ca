import { DiscordButton } from "./Discord"
import { GithubButton } from "./Github"
import "./links.css"

function Links() {
    return (
        <div className="link-container mt-5">
            <DiscordButton />
            <GithubButton />
        </div>
    )
}

export {
    Links
}