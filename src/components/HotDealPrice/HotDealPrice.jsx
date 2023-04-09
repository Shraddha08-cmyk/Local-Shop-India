import React from 'react'
import './HotDealPrice.css'
import eraser from '../../images/eraser.jpg';
import maggi from '../../images/maggi.jpg';
import chocho from '../../images/chocho.png';
import bulb from '../../images/bulb.jpg';
import mixer from '../../images/mixer.jpg';

const HotDealPrice = () => {
  return (
    <div>
      <h6 className='deal-head'>Today's hot deal</h6>
      <hr className='deal-dotted-hr' />
      <div>
        <img className='eraser-img' src={eraser} alt="eraser" />
      </div>
      <div>
        <img className='maggi-img' src={maggi} alt="maggi" />
      </div>
      <div>
        <img className='chocho-img' src={chocho} alt="chocho" />
      </div>
      <div>
        <img className='bulb-img' src={bulb} alt="bulb" />
      </div>
      <div>
        <img className='mixer-img' src={mixer} alt="mixer" />
      </div>
      <p className="eraser-text">Apsara Non Dust Eraser, 20 pcs</p>
      <p className="maggi-text">Maggi 2-Minute Instant Noodles - Masala 280g</p>
      <p className="chocho-text">Sunfeast Dark Fantasy Chocho Fills Biscuits Cookies, 75 g</p>
      <p className="bulb-text">Syska 9W B22D Led Cool Day Light Bulb, Pack of 2</p>
      <p className="mixer-text">USHA RapidMix 500-Watt Mixer Grinder with 5 Years Warranty</p>
      <p className="eraser-offer">&#8377;70.00</p>
      <hr className='eraser-off-hr' />
      <p className="eraser-amount-off">-15% off</p>
      <p className="eraser-actual-price">&#8377;61.00</p>
      <p className="maggi-offer">&#8377;48.00</p>
      <hr className='maggi-off-hr' />
      <p className="maggi-amount-off">-0% off</p>
      <p className="maggi-actual-price">&#8377;48.00</p>
      <p className="chocho-offer">&#8377;25.00</p>
      <hr className='chocho-off-hr' />
      <p className="chocho-amount-off">-0% off</p>
      <p className="chocho-actual-price">&#8377;25.00</p>
      <p className="bulb-offer">&#8377;718.00</p>
      <hr className='bulb-off-hr' />
      <p className="bulb-amount-off">-76% off</p>
      <p className="bulb-actual-price">&#8377;175.00</p>
      <p className="mixer-offer">&#8377;3399.00</p>
      <hr className='mixer-off-hr' />
      <p className="mixer-amount-off">-28% off</p>
      <p className="mixer-actual-price">&#8377;2449.00</p>
    </div>
  )
}

export default HotDealPrice
