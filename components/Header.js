import Link from "next/link";
import Image from "next/image";

const Header = ({title, url}) => {
    return (
      <div className="flex flex-row items-center justify-between mb-6">
        <Link href={url}>
          <Image
            src="/icons/ic_back.png"
            width={26}
            height={25}
            className="cursor-pointer"
            alt="icon"
          />
        </Link>
        <div className="text-base font-bold">{title}</div>
        <div>&nbsp;</div>
      </div>
    )
}

export default Header;