import {Client} from '../models/Client';
import {Request, Response} from 'express';

export const find = async (req: Request, res: Response) => {
    let list = await Client.findAll();
    res.json({list});
}

export const findById = async (req: Request, res: Response) => {
    let {id} = req.params;
    let client = await Client.findByPk(id);
    res.json({client})
}

export const create = async (req: Request, res: Response) => {
    let {name} = req.body;
    let client = await Client.create({name});
    res.json({client})
}

export const update = async (req: Request, res: Response) => {
    let {id} = req.params;
    let {name} = req.body;
    let client = await Client.findByPk(id);

    if(client){        
        client.name = name;
        await client.save();
        res.json({client});
    }
    res.json({error: 'Client not found'});
}

export const destroy = async (req: Request, res: Response) => {
    let {id} = req.params;
    await Client.destroy({
        where: {id}
    })
    res.json({Message: 'Client destroyed'});
}