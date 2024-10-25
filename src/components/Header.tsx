// components/Header.tsx
import { useState } from 'react';

interface HeaderProps {
  onLogin: (isAdmin: boolean) => void;
  isAdmin: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLogin, isAdmin }) => {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin') {
      onLogin(true);
    }
  };

  return (
    <header>
      <h1>Meu App de Cards</h1>
      {!isAdmin ? (
        <div>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Senha Admin" 
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <span>Bem-vindo, Admin!</span>
      )}
    </header>
  );
};

export default Header;