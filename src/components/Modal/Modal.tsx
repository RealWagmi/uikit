import { memo, useCallback, useEffect, useState } from "react";
import { IModalProps } from "./types";
import { ModalCloseBtn, ModalContainer, ModalContent, ModalHeader, ModalWrap } from "./styles";
import { Box } from "../Box";
import { CloseIcon } from "../Svg";

function Modal({
  header,
  children,
  navbarOffset = "72px",
  width = "502px",
  height = "auto",
  value,
  onChange,
  closeOnOutsideClick,
}: IModalProps) {
  const [opened, setOpened] = useState(!!value);

  const close = useCallback(() => {
    if (onChange) onChange(false);
  }, [onChange]);

  useEffect(() => {
    if (value) {
      setOpened(true);
    } else {
      setTimeout(() => {
        setOpened(false);
      }, 200);
    }
  }, [value]);

  return (
    <ModalWrap
      opened={value}
      visible={opened}
      onClick={() => {
        if (closeOnOutsideClick) close();
      }}
    >
      <ModalContainer
        navbarOffset={navbarOffset}
        width={width}
        height={height}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalHeader>
          <Box>{header}</Box>
          <ModalCloseBtn onClick={close} data-testid={`close-modal-btn`}>
            <CloseIcon color={"textGray"} size={"16px"} />
          </ModalCloseBtn>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalWrap>
  );
}

export default memo(Modal);
