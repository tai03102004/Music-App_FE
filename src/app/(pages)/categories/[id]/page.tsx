import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { getCategoryDetail } from "@/app/helper/getCategories";
import { notFound } from 'next/navigation';


export default async function SongsByCategoryPage({params} : {params: {id:string}} ) {

  const data:any = await getCategoryDetail(params.id);

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* CardInfo */}

      <CardInfo image= {data.image} title= {data.title} description={data.description}/>

      {/* Section2 */}
      <Section2 id={params.id}/>
    </>
  );
}
