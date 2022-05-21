import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  .hidden {
    display: none;
  }
`;

const AccordionTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }

  &:active {
  }
`;

const AccordionContent = styled.div`
  font-size: 1rem;
  padding: 1rem;
`;

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  if (!items || items.length === 0) {
    return null;
  }

  const expandItem = index => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <AccordionTitle onClick={() => expandItem(index)}>
              {item.title}
            </AccordionTitle>
            <AccordionContent className={index === activeItem ? "" : "hidden"}>
              {item.content}
            </AccordionContent>
          </div>
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;
