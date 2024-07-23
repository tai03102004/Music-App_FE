import SongItem2 from "./SongItem2";
import {ISongItem} from '@/app/interfaces/ISongItem';

export default function SongList2 (props: {data: ISongItem[]}) {
    const {data} = props;
    return (
        <>
            <div className = "mt-[30px]">
                <div className = "grid grid-cols-1 gap-[10px]">
                    {data.map((item,index)=> (
                        <SongItem2 key={index} 
                            id = {item.id}
                            image = {item.image}
                            title = {item.title}
                            singer = {item.singer}
                            timer = {item.timer}
                        />
                    ))}
            </div>
            </div>
        </>
    )
}