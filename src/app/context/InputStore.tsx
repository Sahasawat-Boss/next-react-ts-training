'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const InputContextStore = createContext<any>(null);

export const InputProvider = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState('');

    return (
        <InputContextStore.Provider value={{ text, setText }}>
            {children}
        </InputContextStore.Provider>
    );
};

export const useInputContextStore = () => useContext(InputContextStore);