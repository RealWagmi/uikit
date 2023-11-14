import { Box, Grid } from "../Box";
import styled from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";
import { rgba } from "polished";
import { useOnClickOutside } from "./useOnClickOutside";
import { ArrowDownIcon } from "../Svg";

type DropdownItemValue = string | number;
interface IProps {
  items: { title?: string; value?: DropdownItemValue }[];
  value?: DropdownItemValue;
  onChange?: (value: any) => void;
}

const DropdownWrap = styled(Grid)<{ maxHeight: number; opened?: boolean }>`
  width: max-content;
  max-height: ${({ maxHeight }) => maxHeight}px;
  padding: 0 0 4px;
  overflow: hidden;
  box-sizing: border-box;
  background: ${({ theme, opened }) =>
    !opened ? rgba(theme.colors.primaryDefault, 0.08) : rgba(theme.colors.strokeGray, 0.16)};
  outline: 0.5px solid ${({ theme }) => rgba(theme.colors.strokeGray, 0.2)};
  outline-offset: -0.5px;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  & svg {
    transform: rotate(${({ opened }) => (opened ? "180deg" : "0")});
    stroke: ${({ theme, opened }) => (!opened ? theme.colors.textGray : theme.colors.white)};

    transition: all 0.15s;
  }

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.strokeGray, 0.16)};

    & svg {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  transition: max-height 0.15s, background 0.2s;
`;

const DropdownItemWrap = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 20px;
  height: 26px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.colors.primaryDefault : theme.colors.textGray)};
  background: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primaryDefault};
  }

  transition: color 0.15s;
`;

const DropdownActivatorWrap = styled(DropdownItemWrap)`
  height: 34px;
  padding: 0 20px;
`;
export default function Dropdown({ items, value, onChange }: IProps) {
  const activeItem = useMemo(() => items.find((v) => v.value === value), [items, value]);
  const minHeight = 34;
  const [maxHeight, setMaxHeight] = useState(minHeight);

  const [opened, setOpened] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(listRef, () => {
    setOpened(false);
  });

  useEffect(() => {
    if (listRef.current) {
      setMaxHeight(listRef.current.scrollHeight);
    }
  }, [items]);

  const height = useMemo(() => (opened ? maxHeight : minHeight), [opened, maxHeight]);

  return (
    <Box height={`${minHeight}px`} overflow={"visible"} position={"relative"} zIndex={100}>
      <DropdownWrap
        ref={listRef}
        maxHeight={height}
        onFocus={() => {
          setOpened(true);
          listRef.current?.scrollTo(0, 0); //autoscroll bug fix
        }}
        onBlur={() => {
          setTimeout(() => {
            if (document.activeElement) {
              const el = document.activeElement as any;
              //close dropdown if new active element is interactive element from outside
              if (el.tabIndex !== -1 && !listRef.current?.contains(el)) {
                setOpened(false);
              }
            }
          }, 0);
        }}
        opened={opened}
      >
        <DropdownActivatorWrap
          onMouseDown={() => {
            setTimeout(() => {
              setOpened(!opened);
            }, 0);
          }}
          active={true}
          tabIndex={-1}
        >
          <span>{activeItem?.title || activeItem?.value || "-"}</span>
          <ArrowDownIcon size={"16px"} />
        </DropdownActivatorWrap>

        <Grid maxHeight={200} overflowY={"auto"} gridGap={"4px"} pt={"6px"}>
          {items.map((item) => (
            <DropdownItemWrap
              key={item.value}
              onClick={() => {
                if (onChange) onChange(item.value);
                setOpened(false);
              }}
              active={item.value === value}
            >
              {item.title || item.value}
            </DropdownItemWrap>
          ))}
        </Grid>
      </DropdownWrap>
    </Box>
  );
}
