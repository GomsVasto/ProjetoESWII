import { Request, Response } from "express";
import { Docente } from "../models/Docente"; 

export class DocenteController {
    private static docentes: Docente[] = [];

    static listarDocentes(req: Request, res: Response): void {
        res.json(this.docentes);
    }

    static obterDocente(req: Request, res: Response): void {
        const id = parseInt(req.params.siape);
        const docente = this.docentes.find(d => d.getSIAPE() === id);
        if (!docente) {
            res.status(404).json({ mensagem: "Docente não encontrado" });
            return;
        }
        res.json(docente);
    }

    static criarDocente(req: Request, res: Response): void {
        try {

            let nome = req.body.nome;
            let departamento = req.body.departamento;
            let email = req.body.email;
            let semestre = req.body.semestre;
            let SIAPE = req.body.SIAPE;
            let telefone = req.body.telefone;
            let ano = req.body.ano;
            let senha = req.body.senha;

            this.docentes.push(new Docente(nome,departamento,email,semestre,SIAPE,telefone,ano,senha));
            // res.redirect("/index");
        } catch (error: any) {
            res.status(400).json({ mensagem: error.message });
        }
    }

    static atualizarDocente(req: Request, res: Response): void {
        try {
            const id = parseInt(req.params.siape);
            const docente = this.docentes.find(d => d.getSIAPE() === id);
            if (!docente) {
                res.status(404).json({ mensagem: "Docente não encontrado" });
                return;
            }

            const { nome, departamento, email, semestre, telefone, ano, senha } = req.body;

            if (nome) docente.setNome(nome);
            if (departamento) docente.setDepartamento(departamento);
            if (email) docente.setEmail(email);
            if (semestre) docente.setSemestre(semestre);
            if (telefone) docente.setTelefone(telefone);
            if (ano) docente.setAno(ano);
            if (senha) docente.setSenha(senha);

            res.json({ mensagem: "Docente atualizado com sucesso" });
        } catch (error: any) {
            res.status(400).json({ mensagem: error.message });
        }
    }

    static deletarDocente(req: Request, res: Response): void {
        const id = parseInt(req.params.siape);
        const index = this.docentes.findIndex(d => d.getSIAPE() === id);
        if (index === -1) {
            res.status(404).json({ mensagem: "Docente não encontrado" });
            return;
        }
        this.docentes.splice(index, 1);
        res.json({ mensagem: "Docente removido com sucesso" });
    }
}

module.exports={DocenteController};