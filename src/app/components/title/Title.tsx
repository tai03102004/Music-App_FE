export default function Title(props: {
    text: string,
    className? : string,
}) {
    const { text = "", className = "" } = props;
    return (
        <>
            <div className = {"text-[#EFEEE0] text-[24px] font-[700] mb-[20px] " + className}>
                {text}
            </div>
        </>
    )
}