import Link from "next/link";

export default function NotFound () {
    return (
        <>
            <div className = "text-center my-[100px]">
                <h2 className = "text-white text-[40px] font-[700]">
                    404 Not Found
                </h2>
                <p className = "text-white mt-[10px] mb-[30px]">
                    Could not find requested resource
                </p>
                <Link href = "/" className = "inline-flex text-[20px] font-[700] bg-blue-400 py-[15px] px-[40px] rounded-[4px]"
                >
                    Return home
                </Link>
            </div>
        </>
    )
}