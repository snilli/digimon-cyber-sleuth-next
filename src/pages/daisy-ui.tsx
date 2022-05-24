const MenuIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-current"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
        ></path>
    </svg>
)

interface NavBarProps {
    title: string
}
const NavBar = (props: NavBarProps) => (
    <div className="w-full navbar bg-base-300 text-base-content">
        <div className="flex-none lg:hidden">
            <label htmlFor="menu-drawer" className="btn btn-square btn-ghost">
                <MenuIcon />
            </label>
        </div>
        <div className="flex-1 px-2 mx-2">{props.title}</div>
    </div>
)

const Menu = () => (
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 h-[calc(100vh-4rem)]">
        <li />
        <li className="menu-title">
            <span>sdsd</span>
        </li>
        <li>
            <a>Sidebar Item 1</a>
        </li>
        <li>
            <a>Sidebar Item 2</a>
        </li>
    </ul>
)

export default function DaisyUiLayout() {
    return (
        <>
            <div className="drawer bg-base-100 h-screen w-full">
                <input
                    id="menu-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    <NavBar title="Navbar Title" />
                    <div className="flex flex:row">
                        <div className="hidden lg:flex text-base-content">
                            <Menu/>
                        </div>
                        <div className="flex">Content</div>
                    </div>
                </div>
                <div className="drawer-side text-base-content">
                    <label htmlFor="menu-drawer" className="drawer-overlay" />
                    <Menu/>
                </div>
            </div>
        </>
    )
}
