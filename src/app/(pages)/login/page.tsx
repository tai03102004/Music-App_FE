import Title from "@/app/components/title/Title";
import FormInput from "@/app/components/form/FormInput";
import FormButton from "@/app/components/form/FormButton";

export default function LoginPage() {
  return (
    <>
      <div className = "mt-[60px] mx-[auto] w-[500px]">
        <Title text="Đăng Nhập Tài Khoản" className="text-center"/>
          <form className = "w-[500px] mx-auto">
            <FormInput 
                label = "Email"
                type = "email"
                name = "email"
                id = "email"
                placeHolder = "Ví dụ: levana@gmail.com"
                required = {true}
            />
            <FormInput 
                label = "Mật Khẩu"
                type = "password"
                name = "password"
                id = "password"
                required = {true}
            />
          </form>
          <FormButton text= "Đăng nhập"/>
        </div>
    </>

  );
}
