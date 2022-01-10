import Offcanvas from "react-bootstrap/Offcanvas";

const AddedConfirmation = () => {
  return (
    <Offcanvas
      show={showMobileFilters}
      onHide={handleClose}
      //   style={{
      //     width: "60%",
      //     paddingLeft: "0.5rem",
      //   }}
    >
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>sdfsdf</Offcanvas.Body>
    </Offcanvas>
  );
};

export default AddedConfirmation;
