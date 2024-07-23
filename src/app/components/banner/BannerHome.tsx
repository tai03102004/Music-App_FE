export default function BannerHome () {
    return (
        <>
            <div className = "w-full rounded-[15px] bg-cover" style ={{ backgroundImage : "url( '/demo/bg-1.png')"}}>
                <div className = "w-[45%] mr-[38px] ml-[30px] my-[116px]">
                    <h3 className = "text-white font-[700] text-[32px]">Nhạc EDM</h3>
                    <p className = "text-white font-[500] text-[14px]">Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ</p>
                </div>
                <div className = "absolute bottom-0 right-[5%]">
                    <img src= "./EDM-Picture.png" alt = "EDM" className = "w-full h-auto"/>
                </div>
            </div>
        </>
    )
}