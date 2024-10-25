import Image from 'next/image';
import styles from '../styles/Card.module.css';

interface CardProps {
  card: {
    id: number;
    title: string;
    text: string;
    image: string;
    createdAt: Date;
  };
  onEdit: (card: any) => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ card, onEdit, onDelete }) => {
  return (
    <div>
    <div className={styles.card}>
      <h2 className={styles.title}>{card.title}</h2>
      {card.image ? (
        <Image 
          src={card.image} 
          alt={card.title} 
          width={150} 
          height={150} 
        />
      ) : (
        <p>Imagem não disponível</p>
      )}
      <p className={styles.text}>{card.text}</p>
      <p className={styles.date}>{new Date(card.createdAt).toLocaleDateString()}</p>
      <button className={styles.button} onClick={() => onEdit(card)}>Editar</button>
      <button className={styles.button} onClick={() => onDelete(card.id)}>Excluir</button>
    </div>
  
    </div>
  );
};

export default Card;