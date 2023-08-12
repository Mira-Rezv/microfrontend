///<reference types="react" />

declare module 'microFrontend1/Button' {
    const Button: ({ onClick }: { onClick: () => void }) => JSX.Element;

    export default Button;
}

declare module 'microFrontend2/Button' {
    const Button: ({ onClick }: { onClick: () => void }) => JSX.Element;

    export default Button;
}
