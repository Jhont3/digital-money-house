export const formatDateToLocal = (dateStr = '', locale = 'en') => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
  
    return new Intl.DateTimeFormat(locale, options).format(new Date(dateStr));
};

// // Example
// const formattedDate = formatDateToLocal('2024-07-28T15:04:05Z', 'es'); // '28 jul. 2024'
// console.log(formattedDate);

  export const formatCurrency = (amount = 0, locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
};
  
  export const generatePagination = (currentPage: number, totalPages: number): (number | string)[] => {
    if (totalPages <= 7) {
      // Si el total de páginas es 7 o menos, muestra todas las páginas sin puntos suspensivos.
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        return [1, 2, 3, 4, '...', totalPages];
      } else if (currentPage >= totalPages - 2) {
        return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }
};
  
  // Ejemplo de uso:
//   const currentPage = 3;
//   const totalPages = 10;
//   const paginationArray = generatePagination(currentPage, totalPages);
//   console.log(paginationArray); // [1, 2, 3, 4, '...', 10]
  