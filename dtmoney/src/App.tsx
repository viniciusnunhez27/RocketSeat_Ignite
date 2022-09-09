import Modal from 'react-modal'
import { GlobalStyle } from './assets/styles/global';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal'; 
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';

//Modal.setAppElement('root')


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

