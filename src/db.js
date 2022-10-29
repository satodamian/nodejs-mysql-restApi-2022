// Conjutno de conexion que podemos reutilizar en produccion 
import {createPool} from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

export const pool = createPool({
    // Objeto de conexion (Equivalente a createConnection)
    host: DB_HOST,
    user: DB_USER,
    // Contraseña del MySQL Workbench
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

// pool.query


