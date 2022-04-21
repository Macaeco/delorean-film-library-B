import {MongoClient} from 'mongodb';


const URI = 'mongodb+srv://maceco:Mz3rys85ANhCrw9@dfl-cluster.eqcv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(URI);
const DATABASE_NAME = 'dfl-macaecobd';
const COLLECTION_NAME = 'validityToken';

export const createValidationToken = async (token, userName) => {
    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const tokens = db.collection(COLLECTION_NAME);
        return await tokens.insertOne({ // asociamos el token al usuario en la BBDD
            token,
            user: userName
        });
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}

// devuelve el token o null si no existe
export const retrieveValidationToken = async (token) => {
    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const tokens = db.collection(COLLECTION_NAME);
        return await tokens.findOne({token});
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}

// borra el token de la BBDD
export const deleteValidationToken = async (token) => {
    try{
        await client.connect();
        const db = client.db(DATABASE_NAME);
        const tokens = db.collection(COLLECTION_NAME);
        return await tokens.deleteOne({token});
    }catch(err){
        console.error(err);
    }finally{
        client.close();
    }
}