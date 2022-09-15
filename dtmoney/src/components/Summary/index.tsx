import { Container } from "./sytles";
import inconmeImg from  "../../assets/income.svg"
import outcomeImg from  "../../assets/outcome.svg"
import totalImg from  "../../assets/total.svg"



export function Summary () {
   return (
    <Container>
        <div>
           <header>
            <p>Entradas</p>
            <img src={inconmeImg} alt="icone-de-entrada" />
            </header>
            <strong>R$1000</strong>
        </div>

        <div>
           <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="icone-de-saidas" />
            </header>
            <strong> -R$500</strong>
        </div>

        <div className="highlight-background">
           <header>
            <p>Total</p>
            <img src={totalImg} alt="icone-de-entrada" />
            </header>
            <strong>R$500</strong>
        </div>


     

    </Container>
   )
} 