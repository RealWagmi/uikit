import { ChevronDown } from "react-feather";
import { RowBetween } from "../BaseButton";
import { ButtonProps } from "rebass";
import ButtonPrimary from "../ButtonPrimary";

export default function ButtonDropdown({ disabled = false, children, ...rest }: { disabled?: boolean } & ButtonProps) {
  return (
    <ButtonPrimary {...rest} disabled={disabled}>
      <RowBetween>
        <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
        <ChevronDown size={24} />
      </RowBetween>
    </ButtonPrimary>
  );
}
