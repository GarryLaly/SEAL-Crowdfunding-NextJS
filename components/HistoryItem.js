import Link from "next/link";
import { toThousand } from "../helpers";
import StatusBar from "./StatusBar";

const HistoryItem = ({refNumber, projectTitle, donationAmount, paymentStatus}) => {
    return (
      <Link href={`/payment-confirm?status=${paymentStatus}`}>
        <div className="bg-white flex flex-row justify-between p-5 rounded-lg mb-4">
          <div>
            <div className="font-bold text-base">{refNumber}</div>
            <div className="text-xs mb-4">{projectTitle}</div>
            <div className="font-bold text-sm">{toThousand(donationAmount)}</div>
          </div>
          <div>
            <StatusBar status={paymentStatus} />
          </div>
        </div>
      </Link>
    )
}

export default HistoryItem;