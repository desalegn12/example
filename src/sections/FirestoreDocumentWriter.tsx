import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm, { FormConfig } from '../components/forms/DynamicForm';
import dashboardTypes from '../@configs/form-item-options/dashboardTypes.json';
import newCustomerConfig from '../@configs/forms/newCustomer.json';
import newDashboardConfig from '../@configs/forms/newDashboard.json';
import newDataModel from '../@configs/forms/newDataModel.json';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setDocInCollection } from '../lib/firebase/firestore'
import { DocumentType } from '../@types';
import useFirestoreQuery from '../hooks/useFirestoreQuery';
import options from '../@configs/form-item-options/options.json'

type Props = {
    documentType: DocumentType;
    id?: string;
}

type Configuration = {
    title: string;
    config: FormConfig;
    dataModel: any;
}

const getConfiguration = (documentType: DocumentType): Configuration => {
    switch(documentType) {
        case 'customers':
            return {
                title: 'Customer',
                config: newCustomerConfig as FormConfig,
                dataModel: dashboardTypes
            };
        case 'dashboards':
            return {
                title: 'Dashboard',
                config: newDashboardConfig as FormConfig,
                dataModel: options
            };
        case 'data-models':
            return {
                title: 'Data Model',
                config: newDataModel as FormConfig,
                dataModel: null
            };
        default:
            throw new Error('Unsupported document type');
    }
}


const FirestoreDocumentWriter = ({ documentType, id }: Props): JSX.Element => {
    const { firestoreData } = useFirestoreQuery({ collectionId: documentType });

    // filter firestoreData to get the document with the id if firestoreData is not empty
    const document = firestoreData.length > 0 ? firestoreData.filter((doc: any) => doc.id === id)[0] : null;

    const navigate = useNavigate();

    const handleSubmit = async (values: Record<string, string>) => {
        console.log(values)
        // if(document){
        //     await setDocInCollection({ collectionId: documentType, data: values, docId: id });
        //     navigate('/');
        //     return;
        // } else {
        //     await setDocInCollection({ collectionId: documentType, data: values });
        //     navigate('/');
        //     return;
        // }
    };

    const configuration = getConfiguration(documentType);

    return (
        <Box component="section" sx={{ p: 4 }}>
            <Typography variant="h3" component="h3" align="center" marginBottom={2}>
                {configuration.title}
            </Typography>
            {id && !document && <Typography variant="h4" component="h4" align="center" marginBottom={2}>Loading...</Typography>}
            {document && (
                <DynamicForm
                    config={configuration.config}
                    dataModel={configuration.dataModel}
                    onSubmit={handleSubmit}
                    initialValues={document}
                    isEditMode={id ? true : false}
                />
            )}
            {!id && (
                <DynamicForm
                    config={configuration.config}
                    dataModel={configuration.dataModel}
                    onSubmit={handleSubmit}
                    isEditMode={id ? true : false}  
                />
            )}
        </Box>
    );
};

export default FirestoreDocumentWriter;
