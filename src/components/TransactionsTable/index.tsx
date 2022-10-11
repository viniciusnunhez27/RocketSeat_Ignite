
import { useTransactions } from "../../hooks/UseTransactions";
import { Container } from "./styles";


export function TransactionsTable () {
   const { transactions } = useTransactions()
  
  
    return (
       <Container>
        <table>
        <thead>
     <tr> 
        <th>Título</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Date</th>
     </tr>
        </thead>
        <tbody>
           {transactions.map(transactions => {
              return (
                <tr key={transactions.id}>
                <td>{transactions.title}</td>
                <td className={transactions.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency:'BRL' 
                 }).format(transactions.amount)}
                </td>

                <td>{transactions.category}</td>
                <td>
                 {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transactions.createAt)
                 )}
                </td>
            </tr>
              )  
           })}
        </tbody>
        </table>
      </Container>

   )
  

} 