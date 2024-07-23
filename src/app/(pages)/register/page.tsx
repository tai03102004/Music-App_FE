import FormInput from "@/app/components/form/FormInput";
import FormButton from "@/app/components/form/FormButton";
import Title from "@/app/components/title/Title";

export default function RegisterPage() {
  return (
    <>
      <div className = "mt-[60px] mx-[auto] w-[500px]">
        <Title text="Đăng Ký Tài Khoản" className = "text-center"/>
        <form className = "w-[500px] mx-auto">
          <FormInput 
            label = "Họ Tên"
            type = "text"
            name = "fullName"
            id = "fullName"
            placeHolder = "Ví dụ: Le Van A"
            required = {true}
          />
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
        <FormButton text="Đăng ký"/>
      </div>
    </>
  );
}
