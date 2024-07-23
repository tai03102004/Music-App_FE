import SongList2 from "@/app/components/song/SongList2"
import { ISongItem } from "@/app/interfaces/ISongItem"

export default function Section2() {
    const data:ISongItem[] = [
        {
            image: "/demo/wishlist.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4:22"
        },
        {
            image: "/demo/wishlist.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4:22"
        },
        {
            image: "/demo/wishlist.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4:22"
        },
        {
            image: "/demo/wishlist.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4:22"
        },
        {
            image: "/demo/wishlist.png",
            title: "Nơi Này Có Anh",
            singer: "Sơn Tùng M-TP",
            time: "4:22"
        }
    ]

    return (
        <>
            <SongList2 data={data}/>
        </>
    )
}
