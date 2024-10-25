// src/pages/index.tsx
import Header from '../components/Header';
import Card from '../components/Card';
import { useState } from 'react';
import { cards } from '../data/cards';
import CardForm from '@/components/CardForm';
import styles from '../styles/Home.module.css'; // Importando o CSS

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cardsList, setCardsList] = useState(cards);

  const handleLogin = (isAdmin: boolean) => {
    setIsAdmin(isAdmin);
  };

  const handleCreateCard = (card: any) => {
    setCardsList([...cardsList, card]);
  };

  const handleEditCard = (card: any) => {
    setCardsList(cardsList.map((c) => (c.id === card.id ? card : c)));
  };

  const handleDeleteCard = (id: number) => {
    setCardsList(cardsList.filter((c) => c.id !== id));
  };

  return (
    <div className='flex flex-col items-center'>
      <Header onLogin={handleLogin} isAdmin={isAdmin} />
      {isAdmin ? (
        <CardForm onSubmit={handleCreateCard} />
      ) : (
        <p className='mt-4'>Faça login para criar cards!</p>
      )}
      <div className={styles.container}>
        {cardsList.map((card) => (
          <div className={styles.card} key={card.id}>
            <Card 
              card={card} 
              onEdit={handleEditCard} 
              onDelete={handleDeleteCard} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;