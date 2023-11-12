import { transparentize } from "polished";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { usePopper } from "react-popper";
import * as PopperJS from "@popperjs/core";
import { Box, Flex } from "../Box";
import { Portal } from "@reach/portal";

const Arrow = styled.div`
  width: 8px;
  height: 8px;

  ::before {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.colors.strokeGray};
  }

  &.arrow-top {
    bottom: -4px;
  }

  &.arrow-bottom {
    top: -4px;
  }

  &.arrow-left {
    right: -4px;
  }

  &.arrow-right {
    left: -4px;
  }
`;

const TooltipContainer = styled.div<{ show: boolean }>`
  pointer-events: none;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: visibility 150ms linear, opacity 150ms linear;
  max-width: 256px;
  cursor: default;
  padding: 0.6rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  word-break: break-word;
  background: ${({ theme }) => theme.colors.strokeGray};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 ${({ theme }) => transparentize(0.9, theme.colors.white)};
`;
export default function Tooltip({ content, children }: { content: ReactNode; children: ReactNode }) {
  const activatorElement = useRef<HTMLDivElement>(null);
  const popperElement = useRef<HTMLDivElement>(null);
  const arrowElement = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const options: PopperJS.Options = {
    placement: "auto",
    strategy: "fixed",
    modifiers: [
      { name: "offset", options: { offset: [2, 8] } },
      { name: "arrow", options: { element: arrowElement.current } },
      { name: "preventOverflow", options: { padding: 8 } },
    ],
  };

  const { styles, update, attributes } = usePopper(activatorElement.current, popperElement.current, options);

  useEffect(() => {
    const updater = setInterval(() => {
      if (update && show) void update();
    }, 100);
    return () => {
      clearInterval(updater);
    };
  }, [update, show]);

  return (
    <Box
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <Flex ref={activatorElement}>{children}</Flex>
      <Portal>
        <TooltipContainer ref={popperElement} style={styles.popper} {...attributes.popper} show={show}>
          {content}
          <Arrow
            className={`arrow-${attributes.popper?.["data-popper-placement"] || ""}`}
            ref={arrowElement}
            style={styles.arrow}
            {...attributes.arrow}
          />
        </TooltipContainer>
      </Portal>
    </Box>
  );
}
