import {React} from 'react'
import SimpleText from '../components/SimpleText/SimpleText'
import SpecialTilt from '../components/SpecialTiltCard/SpecialTiltCard'
import './home.css'
export default function Home(){
    return(
        <div className="presentation-box">
		<div> <SpecialTilt/></div>
		<div>
			<span>
				A new <label>Galaxy</label> is about to be born. thousands of <label>lifes</label> are waiting to be lived. 
				A new era of <label>Galaxy Life</label> is ready to start. 
				All the starlings have to thanks the <label className="creator-label"><a href="https://phoenixnetwork.net/" rel="noreferrer"  target="_blank">Phoenix Network</a></label> for make the game really "reborn" and for make us feel the same emotions we felt some years ago.
			</span>
		</div>
		<div style={{marginTop: '2rem'}}>
		<SimpleText>Stay Tuned for the Big Bang on <i className='fa solid fa-globe'></i> August 31 <i className='fa solid fa-globe'></i></SimpleText>
		</div>
	</div>
    )
}   