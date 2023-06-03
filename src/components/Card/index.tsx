import { Box } from "../Box";
import styled from "styled-components";
import { variant } from "styled-system";

type CardVariantProp = "blue" | "dark-gray" | "gray" | "light" | "outline" | "yellow";

const Card = styled(Box)<{
  width?: string;
  padding?: string;
  border?: string;
  $borderRadius?: string;
  variant?: CardVariantProp;
}>`
  width: ${({ width }) => width ?? "100%"};
  padding: ${({ padding }) => padding ?? "1rem"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "16px"};
  border: ${({ border }) => border};

  ${({ theme }) =>
    variant({
      prop: "variant",
      variants: {
        blue: {
          backgroundColor: theme.card.blueBackground,
          color: theme.card.blueColor,
          borderRadius: "12px",
        },
        "dark-gray": {
          backgroundColor: theme.card.darkGrayBackground,
        },
        gray: {
          backgroundColor: theme.card.grayBackground,
        },
        light: {
          border: `1px solid ${theme.card.lightBorder}`,
          backgroundColor: theme.card.lightBackground,
        },
        outline: {
          border: `1px solid ${theme.card.outlineBorder}`,
        },
        yellow: {
          backgroundColor: theme.card.yellowBackground,
          color: theme.card.yellowColor,
          fontWeight: 500,
        },
      },
    })}
`;
export default Card;
