export const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    const formattedDate = `${day} de ${month} ${year} a las ${formattedHours}:${formattedMinutes} hs.`;

    return formattedDate;
};
