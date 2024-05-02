import React from "react";

const Pagination = (props) => {
  const { page, size, setPage, count } = props && props;
  const pagination = Math.ceil(count / size);
  const arrayButtons = [];

  for (let i = 0; i < pagination; i++) {
    arrayButtons.push({ page: i, number: i + 1 });
  }
  return (
    <section className="flex justify-center items-center gap-1">
      {arrayButtons.length > 0 && (
        <button
          className="size-8 text-xl font-bold border border-[#A4B0BE]"
          onClick={page === 0 ? null : () => setPage(page - 1)}
        >
          {"<"}
        </button>
      )}
      {arrayButtons.length &&
        arrayButtons.map((button, index) => (
          <button
            key={index}
            className={
              page === index
                ? "text-white bg-[#A4B0BE] size-8 text-base font-bold border border-[#A4B0BE]"
                : "size-8 text-base font-bold border border-[#A4B0BE]"
            }
            onClick={() => setPage(button.page)}
          >
            {button.number}
          </button>
        ))}

      {arrayButtons.length > 0 && (
        <button
          className="size-8 text-xl font-bold border border-[#A4B0BE]"
          disabled={page === arrayButtons.length - 1 ? true : false}
          onClick={page < arrayButtons.length && (() => setPage(page + 1))}
        >
          {">"}
        </button>
      )}
    </section>
  );
};

export default Pagination;
