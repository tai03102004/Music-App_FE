import CategoryItem from "./CardItem";
import {ICardItem} from '@/app/interfaces/ICardItem';


export default function CategoryList(props : {data: ICardItem[]}) {
    const {data} = props;
    return (
        <>
            <div className = "grid grid-cols-5 gap-[20px]">
                {data.map((item,index) => (
                    <CategoryItem key = {index}
                        image = {item.image}
                        title = {item.title}
                        description = {item.description}
                        link = {item.link}
                    />
                ))}
            </div>
        </>
    )
}