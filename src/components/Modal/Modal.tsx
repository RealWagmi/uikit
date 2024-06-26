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
  onClose,
  closeOnOutsideClick,
}: IModalProps) {
  const [opened, setOpened] = useState(!!value);

  const close = useCallback(() => {
    if (onClose) onClose(false);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = value ? "hidden" : "auto";
    if (value) {
      setOpened(true);
    } else {
      setTimeout(() => {
        setOpened(false);
      }, 200);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      //update body.overflow when component unmounted
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    opened && (
      <ModalWrap
        opened={value}
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
            {!!onClose && (
              <ModalCloseBtn onClick={close} data-testid={`close-modal-btn`}>
                <CloseIcon color={"textGray"} size={"16px"} />
              </ModalCloseBtn>
            )}
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
        </ModalContainer>
      </ModalWrap>
    )
  );
}

export default memo(Modal);
