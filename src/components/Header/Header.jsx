import React from 'react'
import './Header.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
    return (
        <div>
            <div className="location">
                <p className='location-icon'><HiOutlineLocationMarker /></p>
                <button>Sultanpur</button>
            </div>
            <div className='search'>
                <input className='search-input' type="text" placeholder='    Search anything...' />
                <p className='search-icon'><CiSearch /></p>
            </div>
        </div>
    )
}

export default Header
