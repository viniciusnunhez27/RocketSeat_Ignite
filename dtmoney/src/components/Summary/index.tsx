
import { Container } from "./sytles";
import inconmeImg from  "../../assets/income.svg"
import outcomeImg from  "../../assets/outcome.svg"
import totalImg from  "../../assets/total.svg"
import { useTransactions } from "../../hooks/UseTransactions";



export function Summary () {
   const { transactions } = useTransactions();


   const totalDeposits = transactions.reduce((acc, transaction) => {
     if(transaction.type === 'deposit'){
       return acc+ transaction.amount; 
    }

    return acc;
   }, 0)


   const summary = transactions.reduce((acc, transaction) => {
      if(transaction.type === 'deposit'){
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      }
      else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
   },{
    deposit:0,
    withdraw:0,
    total:0,
   })

   return (
    <Container>
        <div>
           <header>
            <p>Entradas</p>
            <img src={inconmeImg} alt="icone-de-entrada" />
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency:'BRL' 
                 }).format(summary.deposit)}
            </strong>
        </div>

        <div>
           <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="icone-de-saidas" />
            </header>
            <strong>  
             {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency:'BRL' 
                 }).format(summary.withdraw)}</strong>
        </div>

        <div className="highlight-background">
           <header>
            <p>Total</p>
            <img src={totalImg} alt="icone-de-entrada" />
            </header>
            <strong>
            {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency:'BRL' 
                 }).format(summary.total)}
            </strong>
        </div>
    </Container>
   )
} 