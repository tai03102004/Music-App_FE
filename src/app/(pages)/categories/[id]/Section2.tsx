import { ISongItem } from "@/app/interfaces/ISongItem";
import SongList2 from "../../../components/song/SongList2";
import { getSongList } from "@/app/helper/getSong";

export default async function Section2 (props: {id: string}) {
    const {id} = props;
    const data:any[] = await getSongList(undefined, id);

    return (
        <>
            <SongList2 data={data}/>
        </>
    )
}