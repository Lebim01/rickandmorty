import { FaSearch, FaUser } from "react-icons/fa";
import Input from "./components/Input/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8">
      <main className="flex flex-col gap-[32px]">
        <Image
          className="w-full md:w-1/2"
          src="/logo.png"
          alt="Rick and morty logo"
          width={180}
          height={38}
          priority
        />
        <Input
          iconLeft={<FaSearch />}
          inputProps={{
            placeholder: "Find your character...",
          }}
          iconRight={<FaUser />}
        />
      </main>
    </div>
  );
}
