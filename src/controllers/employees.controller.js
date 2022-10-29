import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  // !Manejados de error
  try {
    throw new Error("DB error");
    const [rows] = await pool.query("SELECT * from employees");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getEmployeebyId = async (req, res) => {
  try {
    // console.log(req.params.id);
    const [rows] = await pool.query("SELECT * from employees where id = ?", [
      req.params.id,
    ]);
    console.log(rows);
    // Si es vacio
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// Para toda consulta con la BD debe ser de forma asincrona
export const createEmployees = async (req, res) => {
  try {
    // Consultas desde SQL
    // console.log(req.body)
    const { name, salary } = req.body;
    // Fila Insertada
    const [rows] = await pool.query(
      "INSERT INTO employees (name, salary) VALUES (?,?)",
      [name, salary]
    );
    res.send({
      name,
      salary,
      id: rows.insertId,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    //    console.log(id, name, salary)

    const [result] = await pool.query(
      "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id =?",
      [name, salary, id]
    );
    console.log(result);
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Not found :c",
      });

    const [rows] = await pool.query("SELECT * from employees WHERE id= ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteEmployees = async(req, res) => {
try {
    // console.log(req.params.id);
    const [rows] = await pool.query("DELETE from employees where id = ?", [
        req.params.id,
      ]);
      console.log(rows);
      // Si es vacio
      if (rows.length <= 0) {
        return res.status(404).json({
          message: "Not Found",
        });
      }
      res.json(rows[0]);
} catch (error) {
    res.status(500).json({
        message: "Something goes wrong",
      });
}
};
