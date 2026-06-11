interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center items-center gap-2 mt-8">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-5 py-1 text-3xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
            >
                ‹
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`px-3 py-1 rounded-full border border-black ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white"}`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-5 py-1 text-3xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
            >
                ›
            </button>
        </div>
    );
};

export default Pagination;