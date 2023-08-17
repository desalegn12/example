import { create } from 'zustand';
import { evalFunc } from './_helpers';

export type Account = {
    // accountName: string;
    // accountId: string;
    // propertyName: string;
    // propertyId: string;
    // viewName: string;
    // viewId: string;
    name: string;
    label: string;
    type: 'viewId';
};

export type UIState = {
    gaAccounts: Account[];
    setGaAccounts: (props: any) => void;
    reset: () => void;
};

const initialState: any = {
    gaAccounts: {},
};

// Define data state and functions to update the state
export const useUIStateStore = create<UIState>((set) => ({
    ...initialState,
    reset: () => set(() => initialState),
    setGaAccounts: (props: any) => set((prev: any) => ({ gaAccounts: evalFunc(props, prev.gaAccounts) })),
}));


export const useUIStateState = (): UIState => useUIStateStore();



