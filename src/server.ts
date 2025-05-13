import { PrismaClient } from "@prisma/client";
import express from "express";

const port = 3000;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/movies", async (_, res) => {
   const movies = await prisma.movie.findMany({
      orderBy: { title: "asc" },
      include: { languages: true, genres: true }

   });
   res.json(movies);
});

app.post('/movies', async (req, res) => {

   const { title, genre_id, language_id, oscar_count, release_date } = req.body;

   try {

      const moviewithSameTitle = await prisma.movie.findFirst({
         where: { 
            title: {equals:title, mode: 'insensitive'}
         },       
      });
      if (moviewithSameTitle) {
         res.status(409).send({ message: "Já existe um filme com esse título" });
      }

      await prisma.movie.create({
         data: {
            title,
            genre_id,
            language_id,
            oscar_count,
            release_date: new Date(release_date),
         },
      });
   } catch (error) {
      console.error("Erro ao cadastrar filme:", error);
      res.status(500).send({ message: "Falha ao cadastrar um filme" });
   }
   
   res.status(201).json({ message: 'Filme criado com sucesso!' });
});

app.put("/movies/:id", async (req, res) => {
   
   const id  = Number(req.params.id);
   
   try{
      const movie = await prisma.movie.findUnique({
        where: { id }
      });
      if (!movie)
         {res.status(404).send({ message: "Filme não encontrado" });

      }
      const data = { ...req.body }; data.release_date = data.release_date ? new Date(data.release_date): undefined;
      await prisma.movie.update({ where: { id }, data });

     }catch(error){
      console.error("Erro ao atualizar filme:", error);
       res.status(500).send({ message: "Falha ao atualizar o registro" });
     }

     res.status(200).json({ message: "Filme atualizado com sucesso!" });

     
   });

  
   

app.listen(port, () => {
   console.log(`Servidor em execução em http://localhost:${port}`);
});
