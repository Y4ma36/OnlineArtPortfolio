import Link from "next/link";

import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex justify-between w-full p-8 text-lg uppercase font-notoSans fixed z-50 bg-black animate-revealTopBot">
      <div>
        <p>Lydia J Kim</p>
      </div>
      <div className="max-sm:hidden">
        <ul className="flex gap-9">
          <li>
            <Link href="https://www.instagram.com/lydia_j_kim/">Instagram</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/lydiajkimart/">Gallery</Link>
          </li>
        </ul>
      </div>
      <div className="hidden max-sm:flex">
        <RiMenu3Fill />
      </div>
    </header>
  );
};

export default Header;
