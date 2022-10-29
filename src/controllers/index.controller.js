import {pool} from '../db.js'

export const ping =  async (req, res)=>{
    const [result] = await pool.query('SELECT "PONG" AS RESULT')
    res.json(result[0]);
}