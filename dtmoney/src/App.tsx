import Modal from 'react-modal'
import { GlobalStyle } from './assets/styles/global';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { NewTransactionModal } from './components/NewTransactionModal'; 
import { useState } from 'react';

Modal.setAppElement('root')


export function App() {
  const [isnewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
     setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);

  }

  return (
     <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
       isOpen={isnewTransactionModalOpen}
       onRequestClose={handleCloseNewTransactionModal}
      />
     
     <GlobalStyle />
    </>
  );
 }

