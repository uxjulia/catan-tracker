import React from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { faRotateLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  button {
    max-height: 40px;
    min-height: 40px;
  }

  button#undo {
    background-color: rgba(193, 160, 160, 0.8);
    color: #333333;
  }
`;

const DiceInput = ({ onClick, undo }) => {
  return (
    <Wrapper className="card mx-auto mb-3" id="numberInputs">
      <div className="d-flex justify-content-between align-items-center">
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="2"
          id="2"
        >
          2
        </Button>
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="3"
          id="3"
        >
          3
        </Button>
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="4"
          id="4"
        >
          4
        </Button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="5"
          id="5"
        >
          5
        </Button>
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="6"
          id="6"
        >
          6
        </Button>
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="7"
          id="7"
        >
          7
        </Button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="8"
          id="8"
        >
          8
        </Button>
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="9"
          id="9"
        >
          9
        </Button>
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="10"
          id="10"
        >
          10
        </Button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="11"
          id="11"
        >
          11
        </Button>
        <Button
          className="mx-2 my-1"
          color="light"
          fullWidth
          variant="contained"
          onClick={onClick}
          key="12"
          id="12"
        >
          12
        </Button>
        <Button
          title="Undo last roll"
          fullWidth
          onClick={undo}
          className="mx-2 my-2"
          variant="contained"
          key="undo"
          id="undo"
        >
          <FontAwesomeIcon icon={faRotateLeft} className="me-1" /> Undo
        </Button>
      </div>
    </Wrapper>
  );
};

export default DiceInput;

DiceInput.propTypes = {
  onClick: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
};
