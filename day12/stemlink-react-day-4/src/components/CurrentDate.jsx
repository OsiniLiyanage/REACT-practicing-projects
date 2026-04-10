import FormatDate from "../utils/formatDate"

function CurrentDate() {
    // const d = new Date();
  return (
    <div>CurrentDate : {FormatDate("2026-04-05")}</div>
  )
}

export default CurrentDate