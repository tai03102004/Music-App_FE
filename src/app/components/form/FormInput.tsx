import { IFormInput } from "@/app/interfaces/IFormInput";


export default function FormInput (props : IFormInput) {

    const {
        label = "",
        type = "",
        name = "",
        id = "",
        placeHolder = "",
        required = false,
    } = props;

    return (
        <>
            <div className="mb-[15px] text-start">
                {label && 
                    <label className="block text-[14px] font-[600] text-white" htmlFor= {id}> 
                        <span>{label}</span>
                        {required && 
                            <span className="text-[#FF0000]">*</span> 
                        }
                    </label>
                }
                <input 
                    className="w-full h-[50px] rounded-[6px] mt-[5px] text-[14px] font-[600] text-[#8D9396] pl-[16px] pr-[32px] outline-none" 
                    name= {name} 
                    id = {id}
                    type= {type} 
                    placeholder= {placeHolder}
                    required= {required}
                />
            </div>
        </>
    )
}