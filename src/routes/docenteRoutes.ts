import express from "express";
import { DocenteController } from "../controller/docenteController";

const router = express.Router();

router.get("/docentes", DocenteController.listarDocentes);
router.get("/docentes/:siape", DocenteController.obterDocente);
router.post("/docentes", DocenteController.criarDocente);
router.put("/docentes/:siape", DocenteController.atualizarDocente);
router.delete("/docentes/:siape", DocenteController.deletarDocente);

export default router;
