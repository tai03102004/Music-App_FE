import { ICardItem } from "@/app/interfaces/ICardItem";
import Link from "next/link";


export default function CategoryItem (props : ICardItem) {
    const {
        image = "",
        title = "",
        description = "",
        link = ""
    } = props;

    return (
        <>
            <div>
                <Link href= {link}>
                    <div className = "w-[180px] aspect-square">
                        <img src= {image} alt= {title} className = "w-full h-full object-cover"/>
                        <p className = "text-[14px] font-[700] text-white">{title}</p>
                        <p className = "text-[12px] font-[400] text-[#FFFFFF80] overflow-hidden overflow-ellipsis whitespace-nowrap">{description}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}