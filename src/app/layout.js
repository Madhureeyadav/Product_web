import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const metadata = {
    title: 'shopping App',
    description: 'using the next js',
}

export default function RootLayout({ children }) {
    return ( <
        html lang = "en" >
        <
        body >
        <
        Navbar / >
        <
        main > { children } <
        /main> <
        Footer / >
        <
        /body>  <
        /html >
    )
}