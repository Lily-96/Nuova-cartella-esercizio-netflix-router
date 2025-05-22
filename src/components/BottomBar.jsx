import { BsGrid, BsGrid3X3 } from "react-icons/bs";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

function BottomBar() {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2" style={{ backgroundColor: "#221f1f" }}>
      <div className="d-flex align-items-center">
        <h3 className="mb-0 text-white">TV Shows</h3>

        <Dropdown as={ButtonGroup} className="ms-4 mt-1">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f", borderColor: "#444" }}>
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex align-items-center gap-3">
        <BsGrid style={{ color: "white" }} size={18} />
        <BsGrid3X3 style={{ color: "white" }} size={18} />
      </div>
    </div>
  );
}
export default BottomBar;
