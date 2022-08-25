import {React} from 'react'
import SpecialTilt from '../components/SpecialTiltCard/SpecialTiltCard'
import './home.css'
export default function Home(){
    return(
        <div class="presentation-box">
		<div> <SpecialTilt/></div>
		<div>
			<span>
				A new <label>Galaxy</label> is about to be born. thousands of <label>lifes</label> are waiting to be lived. 
				A new era of <label>Galaxy Life</label> is ready to start. 
				All the starlings have to thanks the <label class="creator-label"><a href="https://phoenixnetwork.net/" target="_blank">Phoenix Network</a></label> for make the game really "reborn" and for make us feel the same emotions we felt some years ago.
			</span>
		</div>
	</div>
    )
}   