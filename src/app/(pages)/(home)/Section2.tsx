
import Title from "../../components/title/Title";
import CategoryList from "@/app/components/card/CardList";
import { ICardItem } from "@/app/interfaces/ICardItem";
import { getCategories } from "@/app/helper/getCategories";


export default async function Section2 () {
    const dataCategoryList:ICardItem[] = await getCategories(5);
    return (
        <>
            <div className = "mt-[30px]"> 
                <Title text = "Danh Mục Nổi Bật"/>
                <div className = "flex">
                    <CategoryList data= {dataCategoryList}/>
                </div>
            </div>
        </>
    )
}