import { Request, Response } from "express"
import { dbConfig } from '../..'
import { User } from '../../entity/user.entity'

export const creatUser = async (req: Request, res: Response) =>{
const user = await dbConfig.getRepository(User).create(req.body)
const results = await dbConfig.getRepository(User).save(user)
return res.send(results)
}