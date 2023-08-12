import * as React from 'react';

interface IButton {
    onClick: () => (value: React.SetStateAction<number>) => void;
}

const Button = ({ onClick }: IButton) => (
    <button onClick={onClick}>decrement</button>
);

export default Button;
