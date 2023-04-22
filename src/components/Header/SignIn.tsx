import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
export const SignIn = () => {
  return (
    <div className="flex flex-col">
      <div className="flex align-middle items-center justify-center gap-2">
        <h3>Sign In to </h3> <Image src={Logo} alt="Logo" />
      </div>
      <form
        action=""
        className="flex flex-col justify-center items-center gap-4"
      >
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className=" p-2 border border-[#E0DEEA] rounded-lg"
          />
        </label>
        <label htmlFor="password" className="flex flex-col items-end">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className=" p-2 border border-[#E0DEEA] rounded-lg"
          />
          <Link href="/" className="text-[#8C8A97] text-xs">
            Forgot password?
          </Link>
        </label>
        <button
          type="submit"
          className="bg-[#FBAB34] text-white py-3 w-[200px] rounded-full"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
