import Conf from '../config.ts'
import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

let db:any
let type:any = Conf.DB.CONF.TYPE
if (Conf.DB.CONF.TYPE == 'mysql' || 'postgres') {
        db = new Database(type, {
           database: Conf.DB.CONF.DATABASE,
           host: Conf.DB.CONF.HOST,
           username: Conf.DB.CONF.USERNAME,
           password: Conf.DB.CONF.PASSWORD,
           port: Conf.DB.CONF.PORT,
         });
} else if(Conf.DB.CONF.TYPE == "mongodb") {
           db = new Database(type, {
           uri:Conf.DB.CONF.MONGO._URI,
           database: Conf.DB.CONF.MONGO._DB,
           });
}else if(Conf.DB.CONF.TYPE == 'sqlite3'){
           const fPath:any =  Conf.DB.CONF.Sqlite3.FilePath
           db = new Database(type, {
           filepath:fPath,
           });
}

export {
     DataTypes,Database,Model,db
}
