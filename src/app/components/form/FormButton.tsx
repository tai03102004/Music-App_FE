export default function FormButton (props : {
    text : string
}) {
    const { text = "" } = props;
    return (
        <>
            <button className = "text-[16px] text-white font-[800] bg-[#00ADEF] w-[500px] h-[50px] rounded-[6px] text-center">
                {text}
            </button>
        </>
    )
}