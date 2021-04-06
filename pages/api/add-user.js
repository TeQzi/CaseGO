// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'


export default async function handle(req, res) {
  const prisma = new PrismaClient;
  const username = req.body.name
  const password = req.body.password
  const balance = parseInt(req.body.balance)
  const id = parseInt(req.body.id)
  const isAdmin = req.body.isAdmin
  console.log(req.body)

  const searchUser = await prisma.players.findFirst({
    where: {
      'nickname': username
    }
  })


  if (searchUser) {
    res.status(404).json({ error: true, message: 'Пользователь уже существует' });


    return;
  }
  else {
    const userAdd = await prisma.players.create({
      data: {
        id: id,
        'nickname': username,
        'password': password,
        'balance': balance

      }
    })
    res.status(200).json({
      error: false, message: "Запись успешно добавлена"
    })
    console.log(userAdd)
    return;
  }





}
