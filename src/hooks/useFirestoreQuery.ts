import React from "react";
import { collection, query, onSnapshot, where, orderBy, and, or } from "firebase/firestore"; 
import { getFirebase } from '../lib/firebase/config';

const { firestore } = getFirebase()

// https://firebase.google.com/docs/firestore/quickstart#initialize
// https://firebase.google.com/docs/firestore/query-data/queries

type WhereCondition = {
    field: string;
    operator: any;
    value: string;
}

type OrderByCondition = {
    field: string;
    direction: any;
}

type WhereCompoundOption = 'and' | 'or' | undefined;

type UseFirestoreQueryProps = {
    collectionId: string;
    docId?: string;
    whereConditions?: WhereCondition[];
    whereCompoundOption?: WhereCompoundOption;
    orderConditions?: OrderByCondition[];
    returnFields?: string[];
}

const getDocChanges = (snapshot: any) => {
    try {
        const changes = snapshot.docChanges().map((change: any) => {
            const { type, doc, newIndex, oldIndex } = change
            const id = doc.id
            return { type, id, newIndex, oldIndex }
        })
        return changes
    } catch (e) {
        console.error(e)
        return []
    }
}

const getWhereConditions = (whereConditions: WhereCondition[]) => {
    const whereObjs = whereConditions ? whereConditions.map((condition: WhereCondition) => {
        const { field, operator, value } = condition
        return where(field, operator, value)
    }) : null
    return whereObjs
}

const getOrderBy = (orderConditions: OrderByCondition[]) => {
    const orderByObjs = orderConditions ? orderConditions.map((condition: OrderByCondition) => {
        const { field, direction } = condition
        return orderBy(field, direction)
    }) : null
    return orderByObjs
}


const useFirestoreQuery = ({ collectionId, docId, whereConditions, whereCompoundOption, orderConditions, returnFields }: UseFirestoreQueryProps) => {
    
    const [firestoreData, setFirestoreData] = React.useState([] as any[])
    const [snapshotChanges, setSnapshotChanges] = React.useState([] as any[])
    const [snapshotMetadata, setSnapshotMetadata] = React.useState({} as {hasPendingWrites: boolean, fromCache: boolean})
    const [loading, updateLoading] = React.useState(false)
    
    React.useEffect(() => {
        updateLoading(true)

        const whereObjs = whereConditions ? getWhereConditions(whereConditions) : null
        const orderByObj = orderConditions ? getOrderBy(orderConditions) : null

        if(collectionId) {
            let ref = query(collection(firestore, collectionId))
            if (whereObjs) {
                // https://firebase.google.com/docs/firestore/query-data/queries#compound_and_queries
                // ref = query(ref, ...whereObjs)
                ref = whereCompoundOption === 'and' 
                    ? query(ref, and(...whereObjs)) 
                    : whereCompoundOption === 'or'
                        ? query(ref, or(...whereObjs))  
                        : query(ref, ...whereObjs) 
            }
            if (orderByObj) {
                ref = query(ref, ...orderByObj)
            }

            // get from database - snapshot is a one time view of the data
            const unsub = onSnapshot(ref, (snapshot) => { 
                
                // get changes
                setSnapshotChanges(getDocChanges(snapshot))

                // get metadata (returns object of {hasPendingWrites, fromCache})
                setSnapshotMetadata(snapshot.metadata)

                // each item will be firestore document + the id of the document
                let results: any[] = []

                snapshot.docs?.forEach((doc) => {
                    results.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    // console.log('results', results)
                    setFirestoreData(results)
                    updateLoading(false)
                    }
                )

            // unsubscribe from the query when the component unmounts
            return () => {unsub()}
        }

    }, [collectionId, whereConditions, whereCompoundOption, orderConditions])


    // filter to only return fields (if provided)
    let filteredData = returnFields ? firestoreData.map((item: any) => {
        const filteredItem = {} as {[key: string]: any}
        returnFields.forEach((field: any) => {
            filteredItem[field] = item[field]
        })
        return filteredItem
    }) : firestoreData
    
    //filter to only docs with docId (if provided)
    filteredData = docId ? filteredData.filter((item: any) => item.id === docId) : filteredData
    
    //return data
    return { firestoreData: filteredData, snapshotChanges, snapshotMetadata }
    
}

export default useFirestoreQuery