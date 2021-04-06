// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
const jwt = require('jsonwebtoken');
const jwtSecret = 'SUPERSECRETE20220';

export default async function handle(req, res) {
  const prisma = new PrismaClient;
  const username = req.body.name
  const password = req.body.password
  const balance = req.body.balance
  
  const searchUser = await prisma.players.findFirst({
    where: {
      'nickname': username
    }
  })
  console.log(searchUser)

if (!searchUser) {
  res.status(404).json({ error: true, message: 'Пользователь не найден' });
  return;
}

  if (password == searchUser.password) {
    const isAdmin = searchUser.isAdmin
    const token = jwt.sign(
      { username: username, password: password, isAdmin: isAdmin, balance: balance },
      jwtSecret,
      {
        expiresIn: 3000, //50 minutes
      },
    );
    res.status(200).json({ token });
    return;
  }
  else {
    res.status(500).json({ error: true, message: 'Пароль неверный!' });
  }



}
