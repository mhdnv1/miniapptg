import React from 'react';
import styles from '../../app/styles/components/Button.module.scss'

interface ButtonProps {
  svgPath: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ svgPath, text, onClick }) => {
  return (
    <button onClick={onClick}  className={styles.button}>
      <span className={styles.text}>{text}</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <path d={svgPath} fill="currentColor" />
      </svg>
      
    </button>
  );
};



export default Button;
