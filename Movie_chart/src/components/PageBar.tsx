import { useSearchParams } from "react-router-dom";

const PageBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);
  const goToPage = (newPage: number) => {
    if (newPage < 1) return;
    setSearchParams({ page: String(newPage) });
  };
  const disableClass = "bg-gray-700 p-8 rounded-3xl text-3xl text-white";
  const btnClass =
    "bg-black p-8 rounded-3xl text-3xl text-white cursor-pointer";
  return (
    <div className="flex justify-center items-center gap-14 my-10 text-xl font-bold">
      <button
        className={currentPage === 1 ? disableClass : btnClass}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >{`<`}</button>
      {currentPage}
      <button
        className={btnClass}
        onClick={() => goToPage(currentPage + 1)}
      >{`>`}</button>
    </div>
  );
};

export default PageBar;
