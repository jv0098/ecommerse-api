import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao Curso de Node.js");
});

app.get("/users", (req: Request, res: Response) => {
    
    let usuarios = [{
        "nome": "João Vitor",
        "idade": 21
    },
    {
        "nome": "Otavio Pereira",
        "ideade": 45 
    }]


    res.send(usuarios)
});

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000")
});

