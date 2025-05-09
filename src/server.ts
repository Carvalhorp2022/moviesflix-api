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

app.listen(port, () => {
   console.log(`Servidor em execução em http://localhost:${port}`);
});
