import React from 'react';
import { useParams } from 'react-router-dom';
import FirestoreDocumentWriter from '../sections/FirestoreDocumentWriter';
import { DocumentType } from '../@types';

type Props = {
    docType: DocumentType;
    templateId: 'new' | 'edit';
}

export default function ChangeDocument({ docType, templateId }: Props): JSX.Element {
    const { id } = useParams(); // id is only passed if "Edit" mode
    return <FirestoreDocumentWriter documentType={docType} id={id} />;
}
