import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

// const temporalAsync = () => {
//     return new Promise( (resolve) =>{
//         setTimeout(() => {
//             resolve(true);
//         }, 2000);
//     })
// }
// export const Navbar = async() => {
//   return (
//     <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
//         <span>Home</span>
//         <div className="flex flex-1"></div>
//         <a href="/about" className="ml-2">About</a>
//         <a href="/contact" className="ml-2">Contact</a>
//         <a href="/pricing" className="ml-1">Pricing</a>

//     </nav>
//   )
// }

const navItems = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href="/" className="flex items-center">
            <HomeIcon className="mr-2" />
            <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        {navItems.map((item, index) => (
            <ActiveLink key={index} { ...item } />
        ))}
    </nav>
  )
}
