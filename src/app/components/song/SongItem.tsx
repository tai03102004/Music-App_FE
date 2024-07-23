import Link from "next/link";
import {FaPlay, FaHeart} from "react-icons/fa6";
import {ISongItem} from '@/app/interfaces/ISongItem';

export default function SongItem (props : ISongItem) {
    const {
        id = "",
        image = "",
        title = "",
        singer = "",
        listen = 0
    } = props;
    return (
        <>
            <div className = "">
                <div className = "flex items-center bg-[#212121] rounded-[15px] p-[10px]">
                    <div className = "w-[76px] aspect-square mr-[20px] rounded-[10px]">
                        <img src = {image} alt = {title} className = "w-full h-full object-cover"/>
                    </div>
                    <div className = "flex-1">
                        <div className = "">
                            <Link href= {`/songs/${id}`} className = "text-[16px] font-[600] text-white">{title}</Link>
                        </div>
                        <div className = "text-[12px] font-[400] text-[#FFFFFF80]">
                            {singer}
                        </div>
                        <div className = "text-[12px] font-[400] text-white">
                            {listen.toLocaleString()} lượt nghe
                        </div>
                    </div>
                    <div className = "">
                        <button className = "text-white p-[8px] border border-white rounded-[999px] mr-[10px]"><FaPlay/></button>
                        <button className = "text-white p-[8px] border border-white rounded-[999px]"><FaHeart/></button>
                    </div>
                </div>
            </div>
        </>
    )
}