import { ChevronDown } from "react-feather";
import { RowBetween } from "../BaseButton";
import { ButtonProps } from "rebass";
import ButtonOutlined from "../ButtonOutlined";

export default function ButtonDropdownLight({
  disabled = false,
  children,
  ...rest
}: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonOutlined {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonOutlined>
  );
}
