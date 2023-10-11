import React, {Component} from "react";
import './Coin.css'
class Coin extends Component{
    render(){
        return(
            <img src={this.props.imgSrc} alt="Image" />
        )

    }

}

export default Coin