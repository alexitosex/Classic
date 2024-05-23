import { ReactNode } from "react"

interface CardProps{
    Class: string
    Img: string
    Description: ReactNode
    Title: string
}


export function Card({Class, Img, Title, Description}: CardProps): JSX.Element{
    return(
        <section className={Class}>
            <img src={Img} alt="avatar" />
            <h1>
                {Title}
                <p> {Description } </p>
            </h1>
            
    
        </section>
    )
}