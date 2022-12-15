const StatusBar = ({status}) => {
    let bgResult = "bg-orange";
    let textResult = "Waiting for payment";

    switch(status) {
      case "waiting":
        bgResult = "bg-orange";
        textResult = "Waiting for payment";
        break;
      case "success":
        bgResult = "bg-green";
        textResult = "Success";
        break;
    }

    return (
      <div className={`${bgResult} text-white text-xs py-2 px-3 rounded-lg`}>{textResult}</div>
    )
}

export default StatusBar;