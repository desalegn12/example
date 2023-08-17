import { setDocInCollection, deleteDocInCollection } from './firestore';

type CollectionCrudProps = {
    item: any;
    action: string;
    dbObjectList: any[];
    user: any;
}

export const handleCollectionLevelOperations = ({item, action, dbObjectList, user}: CollectionCrudProps): void => {
    switch(action) {
        case 'delete':
            // takes an array of ids and deletes from database
            const deletions = dbObjectList.filter(dbObj => item.includes(dbObj.id))
            deletions.forEach((del: any) => {
                // delete from database
                deleteDocInCollection({
                    collectionId: 'team',
                    docId: del.id
                })
            })
            break;
            
        case 'create':
            // takes item object and creates new document in database
            // add uid and email to item
            const newDbObj = {
                ...item,
                createdBy: user.uid,
                lastUpdatedBy: user.uid,
            }
            setDocInCollection({
                collectionId: 'team',
                data: newDbObj
            })
            // if(newDbObj.id){
            //     setDocInCollection({
            //         collectionId: 'team',
            //         docId: newDbObj.id,
            //         data: newDbObj
            //     })
            // } else {
            //     throw `Error: "id" is required for create action`
            // }
            break;
        
        case 'update':
            // takes item object and updates document in database
            // setDoc merges if exists, so this should update the document to provided values
            setDocInCollection({
                collectionId: 'team',
                docId: item.id,
                data: item
            })
            break;
        
        case 'duplicate':
            // takes an array of ids and duplicates and writes to database
            const duplicates = dbObjectList.filter(dbObj => item.includes(dbObj.id))
            // write to database
            duplicates.forEach((dup: any) => {
                let newObject = Object.assign({}, dup);
                if (newObject.id) delete newObject.id;
                setDocInCollection({
                    collectionId: 'team',
                    data: newObject
                });
            });            
            break;

        default:
            throw `Error: action "${action}" is not supported`
    }
}