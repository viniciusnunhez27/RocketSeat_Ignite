import { format } from 'path';
import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsContext, TransactionsProvider } from './TransactionsContext' 



export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);
 
  function handleOpenNewTransactionModal (){
    setisNewTransactionModalOpen(true)
     
  } 
   
  function handleCloseNewTransactionModal (){
      setisNewTransactionModalOpen(false)
 } 

  return (
      <TransactionsProvider>
     
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
     <NewTransactionModal 
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal} />
    <GlobalStyle />

    </TransactionsProvider>
   

      
  );
}


