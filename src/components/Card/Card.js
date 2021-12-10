import React from 'react';
import './Card.scss';

export const Card = ({children, className}) => (
    <div className={`Card ${className}`}>
        {children}
    </div>
);