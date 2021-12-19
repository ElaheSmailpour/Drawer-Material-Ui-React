import * as React from 'react';
import RandomText from "../pages/RandomText"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from "@material-ui/core"
import { ExpandMoreOutlined } from "@material-ui/icons"
const Accordion1 = () => {
  const [current, setCurrent] = React.useState(-1)
  const changeState = (panel) => (e, newValue) => {
    setCurrent(newValue ? panel : -1)

  }
  return (
    <div style={{ margin: "100px" }}>
      <Accordion expanded={current === 0} onChange={changeState(0)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography>This ist a First Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RandomText />
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </AccordionActions>
      </Accordion>
      <Accordion expanded={current === 1} onChange={changeState(1)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography>This ist a Second Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RandomText />
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </AccordionActions>
      </Accordion>
      <Accordion expanded={current === 2} onChange={changeState(2)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography>This ist a Third Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RandomText />
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
export default Accordion1