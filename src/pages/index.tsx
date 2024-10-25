// eslint-disable-next-line @typescript-eslint/no-explicit-any


// src/pages/index.tsx
import Header from '../components/Header';
import { useState } from 'react';
import CardForm from '@/components/CardForm';
import styles from '../styles/Home.module.css'; // Importando o CSS
import Card from '@/components/Card';

interface CardI {
  id: number;
  title: string;
  image: string;
  text: string;
  createdAt: Date;

}

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cardsList, setCardsList] = useState<CardI[]>([]);

  const handleLogin = (isAdmin: boolean) => {
    setIsAdmin(isAdmin);
  };

  const handleCreateCard = (card: CardI) => {
    setCardsList([...cardsList, card]);
  };

  const handleEditCard = (card: CardI) => {
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
        {cardsList.map((card: CardI) => (
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