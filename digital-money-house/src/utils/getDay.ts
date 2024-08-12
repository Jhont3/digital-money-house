export const getDayOfWeek = (dateString: string) => {
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const date = new Date(dateString);
    return daysOfWeek[date.getDay()];
};
