import * as React from 'react';

const IncrementButton = React.lazy(() => import('microFrontend1/Button'));
const DecrementButton = React.lazy(() => import('microFrontend2/Button'));

const App = () => {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <h1>{value}</h1>
            <React.Suspense fallback='Loading IncrementButton...'>
                <IncrementButton onClick={() => setValue((prev) => prev + 1)} />
            </React.Suspense>
            <React.Suspense fallback='Loading DecrementButton...'>
                <DecrementButton onClick={() => setValue((prev) => prev - 1)} />
            </React.Suspense>
        </div>
    );
};

export default App;
