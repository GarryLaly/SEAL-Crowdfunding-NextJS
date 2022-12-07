import { useState } from "react";
import Image from "next/image";

const TextInput = ({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  setValue,
  marginBottom = 25,
}) => {
  const [isView, setIsView] = useState(false);

  return (
    <div className="w-full" style={{ marginBottom }}>
      {label && <div className="text-label text-sm mb-2">{label}</div>}
      <div
        className={`flex flex-row items-center h-60px border ${
          type === "password" ? "border-gray2 bg-gray2" : "border-primary"
        } w-full rounded-xl px-7`}
      >
        {icon && (
          <Image
            src={icon}
            alt="icon"
            width={16}
            height={16}
            className="mr-5"
          />
        )}
        <input
          type={type === "password" ? isView ? "text" : "password" : type}
          placeholder={placeholder}
          className={`${
            type === "password" ? "bg-gray2" : "bg-white"
          } outline-none flex-1`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {type === "password" && (
          <div
            className="bg-secondary border border-primary text-primary text-sm py-2 px-3 rounded-xl cursor-pointer"
            onClick={() => setIsView(!isView)}
          >
            {isView ? 'Hide' : 'View'}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
