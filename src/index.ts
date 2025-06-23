import express, {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const app = express();
app.use(express.json());
const port = 4000;
const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

app.get('/users', async (_, res: Response) => {
  const users = await prisma.user.findMany({
    where: {
      nationality: {
        in: ["German", "Pakistani"],
      }
    }
  })
  res.json(users);
})

app.put('/users', async (_, res: Response) => {
  const users = await prisma.user.update({
    where: {
      email: "alice@example.com",
    },
    data: {
      age: 25,
      isMarried: true,
    }
  });
  res.json(users);
})

app.delete('/users', async (_, res: Response) => {
  const users = await prisma.user.delete({
    where: {
      email: "john@example.com",
    }
  });
  res.json(users);
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
