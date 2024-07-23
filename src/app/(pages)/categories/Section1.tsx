import Title from "../../components/title/Title";
import CategoryList from "@/app/components/card/CardList";
import { ICardItem } from "@/app/interfaces/ICardItem";
import { getCategories } from "@/app/helper/getCategories";

export default async function Section1() {
    const dataCategoryList:ICardItem[] = await getCategories();
    return (
        <>
            <div className = "mx-[30px]"> 
                <Title text = "Danh Mục Bài Hát"/>
                <div className = "flex mb-[20px]">
                    <CategoryList data= {dataCategoryList}/>
                </div>
            </div>
        </>
    )
}