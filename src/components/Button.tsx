import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  className?: string;
  ariaLabel?: string;
  tabIndex?: number;
  id?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  title,
  className,
  ariaLabel,
  tabIndex,
  id,
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
    disabled={disabled}
    title={title}
    aria-label={ariaLabel}
    tabIndex={tabIndex}
    id={id}
  >
    {children}
  </button>
);

export default Button;
