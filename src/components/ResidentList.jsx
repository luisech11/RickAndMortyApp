import React, { useEffect, useState } from 'react';
import ResidentCard from './ResidentCard';
import Pagination from './Pagination';

const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  // Cantidad de residentes por página
  const RESIDENTS_PER_PAGE = 20;
  // Cantidad total de páginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  // Residentes que se van a mostrar en la página actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  // Generación de arreglo de páginas que se van a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [currentLocation]);

  return (
    <section>
      <div className="grid grid-cols-2 gap-4">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default ResidentList;
