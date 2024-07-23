import CategoryList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { ICardItem } from "@/app/interfaces/ICardItem";

export default function Section2 () {
    const dataSingerList:ICardItem[] = [
        {
          image : "/demo/singer-1.png",
          title : "Sơn tùng",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        }, {
          image : "/demo/singer-2.png",
          title : "Nal",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        } , {
          image : "/demo/singer-3.png",
          title : "Tuấn Hưng",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        } , {
          image : "/demo/singer-4.png",
          title : "Jimmy Nguyễn",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        }, {
          image : "/demo/singer-5.png",
          title : "Big Daddy",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        }, {
          image : "/demo/singer-1.png",
          title : "Sơn tùng",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        }, {
          image : "/demo/singer-2.png",
          title : "Nal",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        } , {
          image : "/demo/singer-3.png",
          title : "Tuấn Hưng",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        } , {
          image : "/demo/singer-4.png",
          title : "Jimmy Nguyễn",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        }, {
          image : "/demo/singer-5.png",
          title : "Big Daddy",
          description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          link : ""
        }
      ];
    return (
        <>
            <div className = "mx-[30px]"> 
                <Title text = "Danh Sách Ca Sĩ"/>
                <div className = "flex mb-[20px]">
                    <CategoryList data= {dataSingerList}/>
                </div>
            </div>
        </>
    )
}