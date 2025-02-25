export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();

    const formattedTime = date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
    });

    if (isToday) {
        return formattedTime;
    } else {
        return date.toLocaleDateString("ru-RU") + " " + formattedTime;
    }
};