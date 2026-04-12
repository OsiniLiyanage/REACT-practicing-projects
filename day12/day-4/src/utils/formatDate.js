export default function FormatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString()
}
