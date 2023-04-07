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
    </div>
  )
}

export default HotDealPrice
