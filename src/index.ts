import 'reflect-metadata'
import express, { Request, Response} from 'express'
import { DataSource } from "typeorm"
import { router } from 'express'

const PORT = 5000;

const app = express()
app.use(express.json())
app.use(router)

app.get ('/', (req: Request, res: Response) => res.send('nosso servidor está funcionando! 😍'))

export const dbConfig = new DataSource({
  type: "sqlite",
  database: "./database.db",
  entities: [__dirname + '/../**/*.entity.js'],
  logging: true,
  synchronize: true,
})

dbConfig.initialize()
  .then(() => {
    console.log('conectado ao banco')
    app.listen(PORT, () => console.log(`💻 servidor rodando na porta ${PORT} 💻`))
  })
  .catch (() => console.log('falha ao conectar com o banco'))

  console.log('encerrando servidor')
  




