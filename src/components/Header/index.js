import React from 'react'
import { Link } from 'react-router-dom'
const navigations = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
]
const Header = () => {
    return (
        <div>
            {/* <header className="text-gray-600 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">LootZone</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                       {
                        navigations.map((navigation) =>{
                            return(
                                <Link to={navigation.path} className='mr-5 hover:text-black-900'>{navigation.name}</Link>
                            )
                        })
                       }
                    </nav>
                    <Link to={'/cart'} className="inline-flex items-center bg-indigo-500 border-0 text-white py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Add to cart
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header> */}
            <header className="text-gray-600 body-font shadow-lg items-center">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img className='h-12 w-12 rounded-3xl' alt="fa" src="https://www.creativefabrica.com/wp-content/uploads/2019/03/Monogram-LZ-Logo-Design-by-Greenlines-Studios-580x387.jpg" />
                        <span className="ml-3 text-4xl">LootZone</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto text-3xl flex flex-wrap items-center  justify-center cursor-pointer text-black">
                    {
                        navigations.map((navigation) =>{
                            return(
                                <Link to={navigation.path} className='mr-5 hover:text-black-900'>{navigation.name}</Link>
                            )
                        })
                       }
                    </nav>
                    <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900 hover:text-black rounded text-base mt-4 md:mt-0">Cart
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header