import Title from "@/app/components/title/Title";
import {FaPlay, FaHeart} from "react-icons/fa6";
import SongList2 from "../../components/song/SongList2";

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
      <div className = "">
        <Title text = "Bài Hát Yêu Thích"/>
        <SongList2 data={data}/>
      </div>
    </>
  );
}
