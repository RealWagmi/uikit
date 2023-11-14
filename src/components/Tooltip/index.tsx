import { ReactNode, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import * as PopperJS from "@popperjs/core";
import { Box, Flex } from "../Box";
import { Portal } from "@reach/portal";
import { ITooltipProps } from './types';
import { Arrow, TooltipContainer } from './styles'

export default function ({ content, children }: ITooltipProps) {
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
