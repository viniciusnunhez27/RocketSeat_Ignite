import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles"; 



export function TransactionsTable (){
   useEffect(() => {
     api.get('transactions')
     .then(response => console.log(response.data)) 
   }, [])


    return (
       <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Desenvolvimento de Website</td>
                    <td className="deposity">R$12.000</td>
                    <td>Desenvovimento</td>
                    <td>20/02/2021</td>
                </tr>

                <tr>
                    <td>Aluguel</td>
                    <td className="witdraw">-R$1.100</td>
                    <td>Casa</td>
                    <td>05/10/2021</td>
                </tr>

                <tr>
                    <td>Desenvolvimento de Website</td>
                    <td>R$12.000</td>
                    <td>Desenvovimento</td>
                    <td>20/02/2021</td>
                </tr>

                <tr>
                    <td>Desenvolvimento de Website</td>
                    <td>R$12.000</td>
                    <td>Desenvovimento</td>
                    <td>20/02/2021</td>
                </tr>
                
            </tbody>
        </table>
        </Container>
   
    );
}