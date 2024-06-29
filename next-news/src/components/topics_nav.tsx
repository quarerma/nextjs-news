import Link from "next/link";

export default function TopicsNav() {
  const topics = [
    { name: "Manchetes", slug: "/" },
    { name: "Brasil", slug: "/topics/brasil" },
    { name: "Internacional", slug: "/topics/international" },
    { name: "Economia", slug: "/topics/economy" },
    { name: "Tecnologia", slug: "/topics/technology" },
  ];
  const hoverClassName = "hover:text-[1.6rem] text-2xl  duration-300";
  return (
    <>
      <div className="flex flex-row space-x-24   mb-2  py-2 ml-28">
        {topics.map(({ name, slug }) => (
          <Link key={name} href={slug} className={hoverClassName}>
            {name}
          </Link>
        ))}
      </div>
      <div className="w-full h-[1px] bg-black drop-shadow-md"></div>
    </>
  );
}
