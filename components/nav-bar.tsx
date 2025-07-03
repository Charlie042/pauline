"use client";
import Link from "next/link";
import { H1 } from "./ui/typography";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const pathnameData = [
    {
      name: "Paintings",
      path: "/paintings",
    },
    {
      name: "Bio",
      path: "/Bio",
    },
    // {
    //   name: "Contact",
    //   path: "/Contact",
    // },
  ];

  return (
    <div className="flex flex-col justify-between items-center p-4 font-bodoni-moda  max-w-screen-xl mx-auto ">
      <div className="flex  justify-between items-center my-10 w-full">
        <Link href="/">
          <H1
            className={`font-extralight ${
              pathname === "/"
                ? "font-semibold "
                : "font-light "
            }`}
          >
            Pauline Malize
          </H1>
        </Link>
        <div className="flex gap-4">
          {pathnameData.map((item) => {
            const isActive =
              item.path === "/paintings"
                ? pathname.startsWith("/paintings")
                : pathname === item.path;

            return (
              <Link
                href={item.path}
                key={item.name}
                className={`${
                  isActive
                    ? "font-semibold "
                    : "font-light "
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default NavBar;
