import Link from "next/link";
import Image from "next/image";

const InfoBox = ({label, value}) => {
    return (
      <div className="bg-white p-6 rounded-lg mb-4">
        <div className="text-label font-semibold text-sm mb-2">
          {label}
        </div>
        <div className="font-semibold text-base">{value}</div>
      </div>
    )
}

export default InfoBox;