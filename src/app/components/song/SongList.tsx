import SongItem from "./SongItem";
import {ISongItem} from '@/app/interfaces/ISongItem';

export default function SongList (props : {data : ISongItem[]}) {
    const { data } = props;
    
    return (
        <>
            <div className = "grid grid-cols-1 gap-[12px]">
                {
                    data.map((item,index) => (
                        <SongItem key= {index}
                            id = {item.id}
                            image = {item.image}
                            title = {item.title}
                            singer = {item.singer}
                            listen = {item.listen}
                        />
                    )) 
                }
            </div>
        </>
    )
}