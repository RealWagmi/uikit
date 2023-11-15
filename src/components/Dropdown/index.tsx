import { Grid } from "../Box";
import { useEffect, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";
import { ArrowDownIcon } from "../Svg";
import { DropdownContainer, DropdownActivatorWrapper, DropdownItemWrapper, DropdownWrap } from "./styles";
import { IDropdownProps } from "./types";

export default function Dropdown({ items, value, onChange }: IDropdownProps) {
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
    <DropdownWrap height={`${minHeight}px`}>
      <DropdownContainer
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
        <DropdownActivatorWrapper
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
        </DropdownActivatorWrapper>

        <Grid maxHeight={200} overflowY={"auto"} gridGap={"4px"} pt={"6px"}>
          {items.map((item) => (
            <DropdownItemWrapper
              key={item.value}
              onClick={() => {
                if (onChange) onChange(item.value);
                setOpened(false);
              }}
              active={item.value === value}
            >
              {item.title || item.value}
            </DropdownItemWrapper>
          ))}
        </Grid>
      </DropdownContainer>
    </DropdownWrap>
  );
}
