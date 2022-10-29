// Funciona igual con js pero es mas definido usar el route

import {Router} from 'express';
import {createEmployees, deleteEmployees, getEmployeebyId, getEmployees, updateEmployees} from '../src/controllers/employees.controller.js'
const router = Router();


router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeebyId);
router.post('/employees', createEmployees);
router.patch('/employees/:id', updateEmployees);
router.delete('/employees/:id', deleteEmployees);

export default router;