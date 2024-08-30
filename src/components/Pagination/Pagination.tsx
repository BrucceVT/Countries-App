import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai/index.js";
import { IPagination } from "../../types.ts";

const Pagination: React.FC<IPagination> = ({
  data,
  setPage,
  page,
  itemsPerPage,
  error,
  loading
}) => {
  
  if (loading || error) {
    return;
  }

  const totalPages = Math.ceil(data!.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const totalPagesToShow = 1; // Cambia este valor para mostrar más o menos páginas alrededor de la actual

    // Mostrar la primera página
    pageNumbers.push(1);

    // Mostrar las páginas alrededor de la actual
    for (
      let i = Math.max(2, page - totalPagesToShow);
      i <= Math.min(totalPages - 1, page + totalPagesToShow);
      i++
    ) {
      pageNumbers.push(i);
    }

    // Mostrar puntos suspensivos antes de la primera página si es necesario
    if (typeof pageNumbers[1] === "number" && pageNumbers[1] > 2) {
      pageNumbers.splice(1, 0, "...");
    }

    // Calcular la diferencia entre el total de páginas y la última página en el array
    const lastNumber = pageNumbers[pageNumbers.length - 1];
    const difference =
      totalPages - (typeof lastNumber === "number" ? lastNumber : 0);

    // Mostrar puntos suspensivos después de la última página si es necesario
    if (difference > 1) {
      pageNumbers.push("...");
    }

    // Mostrar la última página
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = renderPageNumbers();

  return (
    <div className="flex justify-center mt-4">
      <nav className="flex items-center gap-2">
        <button
          className="px-4 py-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          aria-label="Página anterior"
        >
          <AiOutlineArrowLeft />
        </button>
        {pageNumbers.map((pageNumber, index) => (
          <span
            key={index}
            className={`px-4 py-2 shadow-md rounded ${
              pageNumber === page
                ? // pageNumber === page || pageNumber === '...'
                  "bg-[#949494] text-white dark:bg-white dark:text-[#2B3743]"
                : "bg-white dark:bg-[#2B3743] cursor-pointer"
            }`}
            onClick={() =>
              pageNumber !== "..."
                ? handlePageChange(pageNumber as number)
                : null
            }
          >
            {pageNumber}
          </span>
        ))}
        <button
          className="px-4 py-2"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Página siguiente"
        >
          <AiOutlineArrowRight />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
