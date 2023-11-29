import { MenuBtnWrap, MenuList, MenuWrap } from "./styles";
import { IMenuProps } from "./types";
import { Text } from "../Text";
import { useCallback, useMemo, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { CheckIcon } from "../Svg";
import { Flex } from "../Box";

export default function Menu<T = any>({
  activator,
  listWidth,
  align = "center",
  offsetX = 0,
  offsetY = 0,
  opened,
  openedChange = (v: boolean) => {},
  value,
  onChange,
  renderItem,
  items = [],
  valueKey,
  multiple,
  canByEmpty,
}: IMenuProps<T>) {
  const [locOpened, setLocOpened] = useState(opened);

  const menuRef = useRef<HTMLDivElement>(null);

  const values = useMemo(() => (Array.isArray(value) ? value : value ? [value] : []), [value]);

  const openedChangeHandler = (opened: boolean) => {
    openedChange(opened);
    setLocOpened(opened);
  };

  const isOpened = useMemo(() => (typeof opened === "boolean" ? opened : locOpened), [opened, locOpened]);

  useOnClickOutside(menuRef, () => {
    openedChangeHandler(false);
  });

  const getWithValueKey = useCallback(
    (item: T) => {
      return typeof valueKey === "undefined" ? item : item[valueKey];
    },
    [valueKey]
  );

  return (
    <MenuWrap align={align} ref={menuRef}>
      <MenuBtnWrap
        onClick={() => {
          openedChangeHandler(!isOpened);
        }}
      >
        {activator || (
          <Text bg={"black"} color={"textGray"} p={"4px"}>
            Activator
          </Text>
        )}
      </MenuBtnWrap>
      {isOpened && (
        <MenuList width={listWidth} offsetX={offsetX} offsetY={offsetY}>
          {items.map((item, i) => {
            const isActive = values.includes(getWithValueKey(item));
            return (
              <MenuBtnWrap
                key={i}
                onClick={() => {
                  if (onChange) {
                    const itemValue = getWithValueKey(item);
                    if (!multiple) {
                      const newValue = isActive ? undefined : itemValue;
                      if (!(newValue === undefined && !canByEmpty)) onChange(newValue);
                    } else {
                      const newValues = items.map(getWithValueKey).filter((v) => {
                        if (isActive) {
                          return values.includes(v) && v !== itemValue;
                        } else {
                          return [itemValue, ...values].includes(v);
                        }
                      });
                      onChange(newValues);
                    }
                  }
                }}
              >
                {renderItem ? (
                  renderItem(item, isActive)
                ) : (
                  <Flex p={"8px"} alignItems={"center"} justifyContent={"space-between"}>
                    <Text color={"textGray"}>{String(getWithValueKey(item))}</Text>
                    {isActive && <CheckIcon size={"16px"} color={"textGray"} />}
                  </Flex>
                )}
              </MenuBtnWrap>
            );
          })}
        </MenuList>
      )}
    </MenuWrap>
  );
}
