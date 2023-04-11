import React from 'react'
import './ElectronicDeal.css';
import TV from '../../images/TV.jpg';
import phone from '../../images/phone.jpg';
import lenovo from '../../images/lenovo.jpg';
import glass from '../../images/glass.jpg';
import watch from '../../images/watch.jpg';

const ElectronicDeal = () => {
    return (
        <div>
            <h6 className='electric-head'>Deals of Electronics</h6>
            <hr className='electric-dotted-hr' />
            <div>
                <img className='tv-img' src={TV} alt="tv" />
            </div>
            <div>
                <img className='phone-img' src={phone} alt="phone" />
            </div>
            <div>
                <img className='lenovo-img' src={lenovo} alt="lenovo" />
            </div>
            <div>
                <img className='glass-img' src={glass} alt="glass" />
            </div>
            <div>
                <img className='watch-img' src={watch} alt="watch" />
            </div>
            <p className="tv-text">Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV</p>
            <p className="phone-text">Redmi 11 Prime 5G (Chrome Silver, 4GB RAM 64GB ROM) 50 MP Dual Cam | 7 Band 5G</p>
            <p className="lenovo-text">Lenovo IdeaPad Slim 3 Intel Core i5 12 Gen 15.6" (39.62cm) FHD Thin & Light Laptop (16GB/512GB SSD)</p>
            <p className="glass-text">Spigen AlignMaster Tempered Glass Screen Guard or iPhone 12 and for iPhone 12 Pro - 2 Pack</p>
            <p className="watch-text">Fire - Boltt Phoenix Smart Watch with Bluetooth Calling 1.3", 120 with SpO2, Heart Rate Monitoring & IP67 Rating</p>
        </div>
    )
}

export default ElectronicDeal
