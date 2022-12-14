import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import pdf1 from "../Assets/images/Naac/IIQA-Self Declaration-PCE.pdf";
import pdf2 from "../Assets/images/Naac/IIQA-Undertaking-PCE.pdf";
const Naac = () => {
  return (
    <div className="nacc_container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>IQAC</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography>IIQA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="accordionDetails_container">
              <a href={pdf1} target="_blank">
                IIQA-Self Declaration-PCE{" "}
              </a>
            </div>
            <div className="accordionDetails_container">
              <a href={pdf2} target="_blank">
                IIQA Undertaking-PCE{" "}
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Naac;
