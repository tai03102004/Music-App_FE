import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { getSongDetail } from "@/app/helper/getSong";
import { notFound } from 'next/navigation';

export default async function SongDetailPage({params} : {params: {id: string}}) {

  const data:any = await getSongDetail(params.id);

  if (!data) {
    notFound();
  }

  const lyrics = data.lyric;


  return (
    <>
      {/* CardInfo */}
      <CardInfo 
        image= {data.image}
        title= {data.title}
        description= {data.description}
      />

      {/* Lời bài hát */}
      <Section2 lyrics = {lyrics}/>
      {/* Bài hát cùng danh mục */}
      <Section3 categoryId = {data.categoryId}/>

    </>
  );
}
