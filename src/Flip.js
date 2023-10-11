import React, {Component} from 'react'
import head from './img/head.png'
import tail from './img/toe.png'
import Coin from './Coin'
import './Flip.css'

class Flip extends Component{
    constructor(props){
        super(props)
        this.state = {
            img: head,
            headCount: 0,
            tailCount: 0,
            totalFlip:0,
        }
    }

    flipCoin = () => {
        this.setState(prevState =>{
            const newImg = prevState.img === head ? tail : head;

            return {
                img: newImg,
                headCount: newImg === head ? prevState.headCount + 1 : prevState.headCount,
                tailCount: newImg === tail ? prevState.tailCount + 1 : prevState.tailCount,
                totalFlip: prevState.totalFlip + 1
            }
        })
        
    }



    render(){
        return(
            <div className='Flip'>
                <h1>Coin Flipper</h1>
                <Coin imgSrc={this.state.img} />
                <p>Heads: {this.state.headCount}</p>
                <p>Tails: {this.state.tailCount}</p>
                <p>Total Flips: {this.state.totalFlip}</p>

                <button onClick={this.flipCoin}>Flip</button>

            </div>
        )
    }
}


export default Flip