function NavigationBar() {
    return (
        <ul id="nav" className="text-neutral-800 dark:text-white list-none italic flex gap-5 text-lg py-5 pl-8 dark:bg-neutral-800 bg-white sticky top-0">
            <li className="hidden not-italic text-black dark:text-neutral-300" id="title">BackwardsDevelopment</li>
            <li><a className="hover:underline hover:text-neutral-600" href="/about">About</a></li>
            {/* <li>Shop</li> */}
            <li><a className="hover:underline hover:text-neutral-600" href="/media">Media</a></li>
            <li><a className="hover:underline hover:text-neutral-600" href="/downloads">Downloads</a></li>
            <li><a className="hover:underline hover:text-neutral-600" href="/projects">Projects</a></li>
            <li><a className="hover:underline hover:text-neutral-600" href="/contact">Contact</a></li>
        </ul>
    )
}

export {
    NavigationBar
}