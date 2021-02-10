import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function SingleFAQ(props) {
  const [open, setOpen] = useState(false);

  const opencollapse = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <p>
        <a
          data-bs-toggle="collapse"
          href={"#collapse" + props.count}
          role="button"
          aria-expanded="false"
          aria-controls={"collapse" + props.count}
          className={open ? "faq-link" : "faq-link collapsed"}
          onClick={opencollapse}
        >
          {props.q}
        </a>
      </p>

      <Collapse in={open}>
        <div id={"collapse" + props.count}>
          <p>{props.a}</p>
        </div>
      </Collapse>
      <hr />
    </React.Fragment>
  );
}

export default SingleFAQ;
