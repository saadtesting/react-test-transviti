import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main className='page-container'>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout