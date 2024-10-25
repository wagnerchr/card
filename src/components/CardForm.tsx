import { useEffect, useState } from "react";
import styles from '../styles/CardForm.module.css'; // Importando o CSS


interface Card {
  id: number;
  title: string;
  text: string;
  image: string;
  createdAt: Date;
}

interface CardFormProps {
  onSubmit: (card: Card) => void; 
  card?: Card; 
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit, card }) => {
  const [title, setTitle] = useState(card?.title || '');
  const [text, setText] = useState(card?.text || '');
  const [image, setImage] = useState(card?.image || '');

  useEffect(() => {
    if (card) {
      setTitle(card.title);
      setText(card.text);
      setImage(card.image);
    }
  }, [card]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCard: Card = {
      id: card ? card.id : Date.now(),
      title,
      text,
      image,
      createdAt: new Date(),
    };
    onSubmit(newCard);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Título:
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Texto:
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className={styles.textarea}
        />
      </label>
      <label className={styles.label}>
        Imagem:
        <input 
          type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>Salvar</button>
      </form>
  );
};

export default CardForm;