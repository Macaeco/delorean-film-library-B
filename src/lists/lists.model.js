import { MongoClient } from 'mongodb';
const URI = 'mongodb+srv://maceco:Mz3rys85ANhCrw9@dfl-cluster.eqcv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(URI);
const DATABASE_NAME = 'dfl-macaecobd';
const COLLECTION_NAME = 'listsFilms';
export const createList = async (list) => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DATABASE_NAME); // paso 7
        const listsCol = db.collection(COLLECTION_NAME); // paso 8
        // a partir de aqui ya puedo hacer operaciones con la collection
       return await listsCol.insertOne(list);// paso 9
    }catch(err){
        console.error('error', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
}
export const retrieveLists = async () => {
    try{
        await client.connect(); // paso 6
        const db = client.db(DATABASE_NAME); // paso 7
        const listsCol = db.collection(COLLECTION_NAME); // paso 8
        const opt = {
            projection: { _id:0 }
        }
        // a partir de aqui ya puedo hacer operaciones con la collection
        const lists = await listsCol.find({}, opt).toArray(); // paso 9 devuelve todos los documentos en formato Array de JS
        console.log(lists)
        return lists;
    }catch(err){
        console.error('error: ', err);
    }finally {
        await client.close(); // paso 10. Cerramos la conexión
    }
};