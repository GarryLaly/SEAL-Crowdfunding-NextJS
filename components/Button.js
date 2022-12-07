import Link from "next/link";

const Button = ({url, text, onClick}) => {
    return onClick ? (
        <div
          className="bg-primary text-center text-white w-full px-2 py-4 rounded-full"
          onClick={onClick}
        >
          {text}
        </div>
    ) : (
        <Link
          href={url}
          className="bg-primary text-center text-white w-full px-2 py-4 rounded-full"
        >
          {text}
        </Link>
    );
}

export default Button;