import { ISongItem } from "@/app/interfaces/ISongItem";
import SongList2 from "../../components/song/SongList2";
import Title from "@/app/components/title/Title";

export default function Section1() {
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
            <Title text = "Kết Quả Tìm Kiếm"/>
            <SongList2 data={data}/>
        </>
    )
}
