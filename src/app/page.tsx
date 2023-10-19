"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MenuCard } from '@/components/MenuCard'
import styles from './page.module.css'
import { Header } from '@/components/Header'
import { Card } from '@/components/Card';
import { Form } from '@/components/Form';

interface dataInterface {
  category: string;
  content: string;
  createdAt: string;
  id: number;
  image: string;
  title: string;
  url: string;
}

export default function Home() {
  const [data, setData] = useState<dataInterface[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log({ data })
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=Recetas');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container__menu_cards}>
        <MenuCard />
        <div className={styles.container__cards}>
          {data.map((info) => (
            <Card
              key={info.id}
              title={info.title}
              content={info.content}
              image={info.image}
            />
          ))}
        </div>
      </div>
      <Form />
    </main>
  )
}
