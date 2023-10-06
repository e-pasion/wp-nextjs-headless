import ReactPaginate from "react-paginate";
import Image from 'next/image';
function Pagination({ currentPage,handlePageChange,pageCount }) {
  return (
    <ReactPaginate
        previousLabel={<Image src={"/arrow.svg"} width={15} height={15}/>}
        nextLabel={<Image src={"/arrow.svg"} className="rotate-180" width={15} height={15}/>}
        breakLabel={"..."}
        containerClassName={
          "mt-10 flex justify-center space-x-2 text-gray-700 font-semibold"
        }
        activeClassName={
          "active-button"
        }
        pageClassName={
          "w-9 h-9 bg-gray-100 rounded-full flex justify-center items-center hover:bg-gray-200"
        }
        previousClassName={
          "w-9 h-9 bg-blue-200 rounded-full flex justify-center items-center"
        }
        nextClassName={
          "w-9 h-9 bg-blue-200 rounded-full flex justify-center items-center"
        }disabledClassName={
          "cursor-not-allowed' text-gray-400"
        }
        breakClassName={"break"}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        disableInitialCallback={true}
        onPageChange={handlePageChange}
        forcePage={currentPage}
      />
  )
}
export default Pagination