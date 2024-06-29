import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky z-20 w-full bg-light-brown top-0  text-white p-4 drop-shadow-lg flex items-center justify-between">
      <Link href={"/"} className="text-4xl font-semibold  ml-24">
        Portal News
      </Link>
      <div className="hover:scale-105 right-0 duration-300 rounded-full h-16 w-16 border-2 mr-24 bg-white "></div>
    </header>
  );
}
