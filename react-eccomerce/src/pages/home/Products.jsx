import React from 'react'
import { FaFilter } from 'react-icons/fa'

const Products = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
        <h2 className='text-3xl font-semibold capitalize text-center my-8'>Or subscribe to the newsletter</h2>

        {/*Products cards */}
        <div>

            {/*All buttons */}
            <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                <button>All Products</button>
                <button>CLothing</button>
                <button>Hoodies</button>
                <button>Bags</button>
            </div>

            {/*Sorting options */}
            <div>
                <div className='bg-black p-2'>
                    <FaFilter className='text-white h-4 w-4'/>
                </div>
                <select>
                    <option value="Default">Default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="low-to-high">low-to-high</option>
                    <option value="high-to-low">high-to-low</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Products