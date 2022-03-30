import { MongoClient } from 'mongodb';



const URI = `mongodb+srv://maceco:${process.env.BD_PASS}@dfl-cluster.eqcv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(URI);
const DATABASE_NAME = 'dfl-macaecobd';
const COLLECTION_NAME = 'followedList';


export const createFList = async (FList) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DATABASE_NAME); // paso 7
        const FListsCol = db.collection(COLLECTION_NAME); // paso 8
        // 
       return await FListsCol.insertOne(FList);// paso 9 
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}


export const retrieveFList = async (email) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DATABASE_NAME); // paso 7
        const FListsCol = db.collection(COLLECTION_NAME); // 
        const opt = {
            projection: { _id:0 }
        }
    
        
        const FLists = await FListsCol.find({email}).toArray(); 
        console.log(FLists)
        return FLists;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close();
    }
};