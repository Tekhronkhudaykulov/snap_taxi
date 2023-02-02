import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

export default function SimpleAccordion() {
  const navigate = useNavigate();
  return (
    <div className="accourdion">
      <Accordion className="box-accordion">
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ boxShadow: "none" }}
        >
          <Typography className="typography" style={{ marginBottom: "0" }}>
            Справочник
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            onClick={() => navigate("/brand")}
            className="typography type-hover"
          >
            Бренды
          </Typography>
          <Typography
            onClick={() => navigate("/color")}
            className="typography type-hover"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            Цвета
          </Typography>
          <Typography
            onClick={() => navigate("/type")}
            className="typography type-hover"
          >
            Типы
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
