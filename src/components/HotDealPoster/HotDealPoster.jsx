import React from 'react'
import './HotDealPoster.css';
import juice from '../../images/juice.jpg';
import neckband from '../../images/neckband.png';
import tea from '../../images/tea.jpg';
import banner from '../../images/groceryBanner.jpg';

const HotDealPoster = () => {
    return (
        <div>
            <div className="left-container">
                <p className='left-p-1'>We picked</p>
                <p className="left-p-2">some</p>
                <p className="left-p-3">cool</p>
                <p className="left-p-4">things</p>
                <p className="left-p-5">for</p>
                <p className="left-p-6">you!</p>
                <p className="left-p-7">*</p>
            </div>
            <div className="right-container-head">
                <p className="right-text">hot deals for you</p>
                <hr className='dotted-hr' />
            </div>
            <div>
                <img className='juice-img' src={juice} alt="juice" />
            </div>
            <div>
                <img className='neckband-img' src={neckband} alt="neckband" />
            </div>
            <div>
                <img className='tea-img' src={tea} alt="tea" />
            </div>
            <p className="juice-text">Tropicana Fruit Juice Litchi Delight,1 L</p>
            <p className="neckband-text">Oneplus Bullets Z2 Bluetooth Wireless</p>
            <p className="tea-text">Taj Mahal Tea, 1 kg Carton</p>
            <p className="juice-offer">&#8377;110.0.00</p>
            <hr className='juice-off-hr' />
            <p className="juice-amount-off">-27% off</p>
            <p className="juice-actual-price">&#8377;80.00</p>
            <p className="neckband-offer">&#8377;2699.00</p>
            <hr className='neckband-off-hr' />
            <p className="neckband-amount-off">-26% off</p>
            <p className="neckband-actual-price">&#8377;1699.00</p>
            <p className="tea-offer">&#8377;720.00</p>
            <hr className='tea-off-hr' />
            <p className="tea-amount-off">-10% off</p>
            <p className="tea-actual-price">&#8377;648.00</p>
            <img className='grocery-banner' src={banner} alt="banner" />
        </div>
    )
}

export default HotDealPoster
