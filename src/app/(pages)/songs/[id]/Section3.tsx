import Title from "../../../components/title/Title";
import CategoryList from "@/app/components/card/CardList";
import { getSongList } from "@/app/helper/getSong";


export default async function Section3(props: {categoryId: string}) {

  const {
    categoryId  
  } = props;

  const data:any[] = await getSongList(undefined, categoryId);
  
  return (
      <>
        <div className = "mt-[30px]"> 
          <Title text = "Bài Hát Cùng Danh Mục"/>
          <div className = "flex mb-[20px]">
              <CategoryList data= {data}/>
          </div>
        </div>
      </>
  )
}