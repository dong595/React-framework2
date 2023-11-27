import { Outlet, useLocation, useParams } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
const ProductItems = () => {
  const location = useLocation();
  const { id } = useParams();
  const path = location.pathname;
  console.log(path);
  let Text = "add";

  if (path === "/admin/products") {
    Text = "list";
  } else if (path === `/admin/products/${id}/edit`) {
    Text = "edit";
  }

  return (
    <>
      <header className="flex items-center justify-between uppercase mb-2 mx-2  ">
        <h2 className="flex items-center gap-1 font-medium">
          Products <AiOutlineDoubleRight />
          <span className="text-blue-500">{Text}</span>
        </h2>
      </header>
      <Outlet />
    </>
  );
};

export default ProductItems;
