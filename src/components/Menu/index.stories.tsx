import MenuComponent from "./Menu";
import { Box, Flex, Grid } from "../Box";
import { Text } from "../Text";
import React, { useState } from "react";
import { Button } from "../Button";
import { ChainId } from "@real-wagmi/sdk";
import { useTheme } from "styled-components";
import { useChainSvgLogo } from "../../hooks";
import { ArrowDownIcon, CheckIcon } from "../Svg";
import { rgba } from "polished";

export default {
  title: "Components/Menu",
  component: MenuComponent,
  argTypes: {},
};

const numericItems = [1, 2, 3, 4, 5];

const items = [
  { id: 1, name: "First Item" },
  { id: 2, name: "Second Item" },
  { id: 3, name: "Last Item" },
];

const chainItems = [
  ChainId.ETHEREUM,
  ChainId.OPTIMISM,
  ChainId.BSC,
  ChainId.POLYGON,
  ChainId.FANTOM,
  ChainId.ZKSYNC,
  ChainId.KAVA,
  ChainId.AVALANCHE,
  ChainId.ARBITRUM,
];

const feeItems = [
  { name: "0.05%", value: 5 },
  { name: "0.30%", value: 30 },
  { name: "1%", value: 100 },
];

const ChainActivator = ({ chainId }: { chainId: ChainId }) => {
  const ChainIcon = useChainSvgLogo(chainId);
  return (
    <Flex
      width={"195px"}
      px={"8px"}
      py={"14px"}
      bg={"ebonyGray"}
      borderRadius={12}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"}>
        <ChainIcon size={"24px"} />
        <Text variant={"body-1"} color={"textGray"} ml={"8px"}>
          Selected {chainId}
        </Text>
      </Flex>
      <ArrowDownIcon size={"20px"} color={"textGray"} />
    </Flex>
  );
};

const ChainItem = ({ chainId, active }: { chainId: ChainId; active: boolean }) => {
  const ChainIcon = useChainSvgLogo(chainId);
  return (
    <Flex p={"16px"} alignItems={"center"} justifyContent={"space-between"}>
      <Flex alignItems={"center"}>
        <ChainIcon size={"32px"} />
        <Text variant={"subtitle-1"} color={"white"} ml={"8px"}>
          Chain {chainId}
        </Text>
      </Flex>
      {active && <CheckIcon size={"20px"} color={"textGray"} />}
    </Flex>
  );
};

const FeeActivator = ({ values }: { values: (typeof feeItems)[number]["value"][] }) => {
  const theme = useTheme();
  return (
    <Flex bg={"darkBg"} py={"6px"} px={"12px"} borderRadius={24}>
      <Text variant={"subtitle-2"} color={"white"}>
        Fee tiers
      </Text>
      {values.map((v) => {
        const name = feeItems.find((item) => item.value === v).name;
        return (
          <Box key={v} px={"10px"} py={"2x"} ml={"4px"} borderRadius={32} bg={rgba(theme.colors.textGray, 0.1)}>
            <Text variant={"subtitle-2"} color={"white"}>
              {name}
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
};
const FeeItem = ({ value, active }: { value: (typeof feeItems)[number]; active: boolean }) => {
  return (
    <Flex px={"6px"} py={"12px"}>
      <Flex opacity={active ? 1 : 0}>
        <CheckIcon color={"white"} size={"16px"} />
      </Flex>
      <Text variant={"subtitle-2"} color={"white"} ml={"4px"}>
        {value.name}
      </Text>
    </Flex>
  );
};

export const Menu = () => {
  const [opened, setOpened] = useState(false);
  const [value0, setValue0] = useState(1);
  const [value1, setValue1] = useState(2);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState([30, 100]);
  return (
    <Grid gridTemplateColumns={"repeat(2, 1fr)"} mt={"10px"}>
      <Box>
        <Text variant={"h5"} mb="20px">
          Simple
        </Text>
        <MenuComponent<(typeof numericItems)[number]>
          listWidth={"100%"}
          align={"center"}
          offsetY={5}
          items={numericItems}
          value={value0}
          onChange={setValue0}
        />
      </Box>
      <Box>
        <Text variant={"h5"} mb="20px">
          Reactive
        </Text>
        <Flex alignItems={"center"}>
          <MenuComponent<(typeof items)[number]>
            align={"center"}
            offsetY={5}
            opened={opened}
            openedChange={setOpened}
            items={items}
            valueKey={"id"}
            value={value1}
            onChange={setValue1}
            listWidth={"100%"}
          />
          <Button
            width={"90px"}
            scale={"small"}
            disabled={opened}
            onClick={() => {
              setOpened(true);
            }}
            ml={"40px"}
          >
            Open (reactive)
          </Button>
        </Flex>
      </Box>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
      <Box>
        <Text variant={"h5"} mb="20px" mt={"40px"}>
          Custom Styles
        </Text>
        <MenuComponent<(typeof chainItems)[number]>
          listWidth={"100%"}
          align={"center"}
          offsetY={8}
          items={chainItems}
          value={value2}
          onChange={setValue2}
          activator={<ChainActivator chainId={value2} />}
          renderItem={(item, isActive) => <ChainItem chainId={item} active={isActive} />}
          closeOnClick={true}
        />
      </Box>
      <Box>
        <Text variant={"h5"} mb="20px" mt={"40px"}>
          Multiply select
        </Text>
        <Flex justifyContent={"center"}>
          <MenuComponent<(typeof feeItems)[number]>
            align={"center"}
            offsetY={8}
            items={feeItems}
            value={value3}
            onChange={setValue3}
            valueKey={"value"}
            multiple={true}
            listWidth={"230px"}
            activator={<FeeActivator values={value3} />}
            renderItem={(item, isActive) => <FeeItem value={item} active={isActive} />}
          />
        </Flex>
      </Box>

      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
      <Text color="strokeGray" variant={"h5"} mt="40px">
        Overlapping content.
      </Text>
    </Grid>
  );
};
