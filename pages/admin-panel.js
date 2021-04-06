import { PrismaClient } from "@prisma/client";
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import React, { useEffect } from "react";
import Header from "../component/header"

import AddUser from '../component/addUser'
export default function Adminka(){
    const { data, revalidate } = useSWR('/api/me', async function (args) {
        const res = await fetch(args);
        return res.json();
      });
      if (!data) return <h1>Загрузка...</h1>;
      let loggedIn = false;
      if (data.password) {
        loggedIn = true;
      }
    return(
        <>
        <Header />
        {data.isAdmin && <AddUser />}
        <h1>{!data.isAdmin && "Для доступа к админ панели необходимо права администратора"} </h1>
        </>
    )
}