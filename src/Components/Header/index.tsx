import "./header.css";
import { Links } from "../Links";

function Header(props: any) {
  var { tagline } = props
  if (tagline === "") tagline = "Scripts, Designs, Mods and Discord Bots"
  return (
    <div id="header" className="header text-neutral-800 dark:text-white text-center h-screen flex flex-col">
      <header className="p-6 w-full self-center my-auto">
        <h1 className="p-0 text-6xl">Backwards Development</h1>
        <h3 className="p-0 text-3xl">{tagline}</h3>
        <p className="mt-10 text-2xl">A place where Developers can learn, engage, and create.</p>
        <Links />
      </header>
      <svg id="scroll_indicator" className="fill-neutral-800 dark:fill-white w-screen h-10" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg>
    </div>
  );
}

export {
  Header
};
