import BannerHome from "../../components/banner/BannerHome";
import Title from "../../components/title/Title";
import {ISongItem} from '@/app/interfaces/ISongItem';
import { getSongList } from "@/app/helper/getSong";
import SongList from "../../components/song/SongList";


export default async function Section1 () {

  const dataSongList:ISongItem[] = await getSongList(3);
  return (
      <>
          <div className="flex justify-between items-start">
              <div className="w-[534px] flex relative mr-[20px]">
                  <BannerHome />
              </div>
              <div className="flex-1">
                  <Title text = "Nghe nhiều"/>
                  <SongList data= {dataSongList}/>
              </div>
          </div>
      </>
    )
}