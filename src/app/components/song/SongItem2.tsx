
import {FaPlay, FaRegHeart} from "react-icons/fa6";
import {ISongItem} from '@/app/interfaces/ISongItem';
import Link from 'next/link'

export default function SongItem2 (props: ISongItem) {
    const {
        id = "",
        image = "",
        title = "",
        singer = "",
        timer = ""
    } = props;
    return (
        <>
            <div className = "bg-[#212121] flex items-center justify-between py-[10px] px-[18px] rounded-[15px]">
                <div className = "w-[40%] flex items-center">
                    <button className = "text-white text-[24px]">
                        <FaPlay/>
                    </button>
                    <div className="mx-[12px] w-[42px] aspect-square truncate rounded-[15px]">
                        <img src= {image} alt = {title} className =  "w-full h-full object-cover"/>
                    </div>
                    <p className = "text-[16px] font-[700] text-white">
                        <Link href = {`/songs/${id}`}>
                            {title}
                        </Link>
                    </p>
                </div>
                <div className = "text-[14px] text-[#FFFFFF] font-[400] text-center">
                    {singer}
                </div>
                <div className = "flex justify-ends items-center">
                    <p className= "text-[14px] font-[400] text-white mr-[18px]">
                        {timer}
                    </p>
                    <button className = "text-primary">
                        <FaRegHeart/>
                    </button>
                </div>
            </div>
        </>
    )
}