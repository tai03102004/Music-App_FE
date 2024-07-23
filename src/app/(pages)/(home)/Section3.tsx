import Title from "../../components/title/Title";
import CategoryList from "@/app/components/card/CardList";
import { ICardItem } from "@/app/interfaces/ICardItem";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/fireBaseConfig";

const getDataCategoryList = async () => {
  const singerRef = ref(dbFirebase,"singers");

  const result:ICardItem[] = await new Promise(
    (resolve) => {
      onValue(singerRef, (snapshot) => {
        const data:any[] = [];
        
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childValue = childSnapshot.val();

          data.push({
            id : childKey,
            link : `singers/${childKey}`,
            ...childValue
          })

        })
        resolve(data.slice(0,5));
      })
    }
  )
  return result;
}

export default async function Section3 () {
    const dataSingerList = await getDataCategoryList();
    return (
        <>
            <div className = "mt-[30px]"> 
                <Title text = "Ca Sĩ Nổi Bật"/>
                <div className = "flex">
                    <CategoryList data= {dataSingerList}/>
                </div>
            </div>
        </>
    )
}