import ReactPaginate from "react-paginate";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // icons form react-icons

function Pagination({ currentPage,handlePageChange,pageCount }) {
  return (
    <ReactPaginate
        previousLabel={<BsArrowLeft />}
        nextLabel={<BsArrowRight />}
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