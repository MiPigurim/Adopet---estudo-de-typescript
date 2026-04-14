import { Request, Response } from "express";

let listasDePets = [];

export default class PetController {
  criaPet(req: Request, res: Response) {
    const novoPet = req.body;
    listasDePets.push(novoPet);
    return res.status(201).json(novoPet);
  }
}
