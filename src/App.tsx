import './App.css'
import { Background } from './components/Background'
import magic from './assets/magic.png'
import robuxOld from './assets/robuxold.png'
import tix from './assets/tix.png'
import house from './assets/house.png'
import { Card } from './components/card.tsx'

function App() {
  return (
    <div className="App">
      <Background />
      <div className="card-container">
        <Card
          Class="card"
          Title={"Redescubre el mundo de los clásicos"}
          Img={magic}
          Description={
            <>
              Acompáñanos en un viaje inolvidable mientras celebramos <br />
              nuestra rica tradición durante The Classic del 23 al 28 de mayo.<br />
              <br />
              Únete hoy mismo y aprovecha las recompensas.
            </>
          }
        />
        <Card
          Class="card-right"
          Title={"Completa misiones para ganar tokens"}
          Img={robuxOld}
          Description={
            <>
              Gana tokens completando desafíos en la experiencia y cámbialos <br />
              por objetos de avatar.
            </>
          }
        />
        <Card
          Class="card"
          Title="Find the Tix"
          Img={ tix }
          Description={
            <>
              Recoge Tix ocultos en las experiencias participantes y canjealos <br />
              por recompensas exclusivas del hub.
            </>
          }
        />

        <Card
          Class="card-right"
          Title="Los clásicos toman el control en el hub"
          Img={ house }
          Description={
            <>
              Prepárate para una explosión de nostalgia y entra en un mundo <br />
              lleno de favoritos clásicos.
            </>
          }
        />
        
      </div>
    </div>
  )
}

export default App
