import React, { createContext, useContext } from 'react';
import { useUIStateStore, UIState } from './useUIStateStore';

type SingleFunctions = {
    resetGlobalState: () => void;
}

type CombinedState = UIState    
    & SingleFunctions;

type GlobalStateProviderProps = {
    children: React.ReactNode;
}

const GlobalStateContext = createContext<CombinedState | null>(null);

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps): JSX.Element => {
    
    const uiState = useUIStateStore();
    
    const resetGlobalState = React.useCallback(() => {
        uiState.reset();
    }, [uiState]);
    
    const combinedState: CombinedState = React.useMemo(() => ({ 
            resetGlobalState,
            ...uiState,
        }),
        [resetGlobalState, uiState]
    );

    return (
        <GlobalStateContext.Provider value={combinedState}>
            {children && children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within GlobalStateProvider');
    }
    return context;
};
