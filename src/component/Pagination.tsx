interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages },
                (_, i) => (
                    <button key={i} onClick={() => onPageChange(i + 1)}
                        className={`px-4 py-2 rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white"}`}>
                        {i + 1}
                    </button>
                )
            )}
        </div>
    );
};

export default Pagination;