import Offcanvas from "react-bootstrap/Offcanvas";
import Filters from "./Filters";

const FiltersMobile = ({
  category,
  filters,
  setFilters,
  showMobileNav,
  setShowMobileNav,
}) => {
  const handleClose = () => setShowMobileNav(false);

  return (
    <Offcanvas
      show={showMobileNav}
      onHide={handleClose}
      style={{
        width: "60%",
      }}
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <Filters
          category={category}
          filters={filters}
          setFilters={setFilters}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FiltersMobile;
