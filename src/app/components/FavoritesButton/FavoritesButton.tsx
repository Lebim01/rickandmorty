/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../Button/Button";
import FavoritesPopper from "../FavoritesPopper/FavoritesPopper";
import { usePopper } from "react-popper";
import { BiSolidDownArrow } from "react-icons/bi";

const FavoritesButton = () => {
  const [visible, setVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  /* 2️⃣ cálculos de Popper */
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
        { name: "arrow", options: { element: arrowElement } },
      ],
    }
  );

  return (
    <>
      <Button
        ref={setReferenceElement as any}
        onClick={() => setVisible((s) => !s)}
      >
        FAVS
      </Button>

      {visible && (
        <div
          ref={setPopperElement as any}
          style={popperStyles.popper}
          {...attributes.popper}
        >
          <FavoritesPopper />
          <div
            ref={setArrowElement as any}
            style={popperStyles.arrow}
            className="popper-arrow"
          >
            <BiSolidDownArrow />
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritesButton;
