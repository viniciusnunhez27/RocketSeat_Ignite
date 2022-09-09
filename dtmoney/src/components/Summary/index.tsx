import { Container } from "./sytles";
import iconcomeImg from '../../assets/income.svg'
import iconoutcomeImg from '../../assets/outcome.svg'
import icontotalImg from '../../assets/total.svg'




export function Summary () {
   return (
 <Container>
   <div>
     <header>
     <p>Entradas</p>
     <img src={iconcomeImg} alt="Icone-de-entrada" />
    </header>
    <strong>R$1000,00</strong>
   </div>

   <div>
     <header>
     <p>Saídas</p>
     <img src={iconoutcomeImg} alt="Icone-de-saida" />
    </header>
    <strong> - R$5000,00</strong>
   </div>

   <div className="highlight-background">
     <header>
     <p>Total</p>
     <img src={icontotalImg} alt="Icone-de-total" />
    </header>
    <strong>R$500</strong>
   </div>

   
 </Container>

   );
} 