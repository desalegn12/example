import { DocumentType } from '../@types';

type DocumentTypeOptions = {
    value: DocumentType;
    label: string;
}[];

export const FIRESTORE_OPTIONS: DocumentTypeOptions = [
    {
        value: 'customers',
        label: 'Customers',
    },
    {
        value: 'dashboards',
        label: 'Dashboards',
    },
    {
        value: 'data-models',
        label: 'Data Models',
    },
];