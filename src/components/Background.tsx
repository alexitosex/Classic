import background from '../assets/background.jpg'
import logo from '../assets/logo.png'
import Countdown from './counter'


export function Background(): JSX.Element {
    return(
        <div className="background">
            <img className="background-image" src={ background } alt="" />
            <img  className="logo" src= { logo } alt="" />
            <Countdown />
        </div>
    )
}