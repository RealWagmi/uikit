import React, { useState } from "react";
import ModalComponent from "./Modal";
import { Box, Flex, Grid } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";
import { InfoIcon } from "../Svg";
import { Tooltip } from "../Tooltip";

export default {
  title: "Components/Modal",
  component: ModalComponent,
  argTypes: {},
};

export const Modal = () => {
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);
  const [opened5, setOpened5] = useState(false);

  return (
    <Box>
      <Grid gridGap={"12px"}>
        <Button
          onClick={() => {
            setOpened1(true);
          }}
        >
          Simple Modal
        </Button>
        <Button
          onClick={() => {
            setOpened2(true);
          }}
        >
          Custom sizes Modal
        </Button>
        <Button
          onClick={() => {
            setOpened3(true);
          }}
        >
          Custom header Modal
        </Button>
        <Button
          onClick={() => {
            setOpened4(true);
          }}
        >
          Scrolled Modal
        </Button>
        <Button
          onClick={() => {
            setOpened5(true);
          }}
        >
          Non closable Modal
        </Button>
      </Grid>

      <ModalComponent header={"Simple modal"} value={opened1} onClose={setOpened1} closeOnOutsideClick={true}>
        <Box p={"24px"} pt={0}>
          You can close the modal by close button or click outside.
        </Box>
      </ModalComponent>

      <ModalComponent header={"300x300px modal"} value={opened2} onClose={setOpened2} height={"300px"} width={"300px"}>
        <Box p={"24px"} pt={0}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Text variant={"h5"} key={i}>
              Content
            </Text>
          ))}
        </Box>
      </ModalComponent>

      <ModalComponent
        header={
          <Flex pl={"48px"} justifyContent={"center"}>
            <Text color={"red"} variant={"h6"}>
              Custom centred Header
            </Text>
            <Flex>
              <Tooltip content={"Some content"}>
                <InfoIcon color={"red"} ml={"8px"} size={"24px"} />
              </Tooltip>
            </Flex>
          </Flex>
        }
        value={opened3}
        onClose={setOpened3}
      >
        <Box p={"24px"} pt={0}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Text variant={"h5"} key={i}>
              Content
            </Text>
          ))}
        </Box>
      </ModalComponent>

      <ModalComponent header={"Scrolled Modal"} value={opened4} onClose={setOpened4} height={"300px"}>
        <Grid gridTemplateRows={"auto 1fr"} height={"100%"}>
          <Box p={"24px"} pt={0}>
            Non scrolled content
          </Box>
          <Box p={"24px"} pt={0} overflowY={"auto"}>
            {Array.from({ length: 50 }).map((_, i) => (
              <Text variant={"h5"} key={i}>
                Scrolled content
              </Text>
            ))}
          </Box>
        </Grid>
      </ModalComponent>
      <ModalComponent header={"Non closable Modal"} value={opened5} height={"300px"}>
        <Box p={'24px'} pt={'48px'}>
          <Button
            onClick={() => {
              setOpened5(false);
            }}
          >
            Custom close button
          </Button>
        </Box>
      </ModalComponent>

      <Box mt={"40px"}>
        {Array.from({ length: 20 }).map((_, i) => (
          <Text variant={"h5"} color={"darkGray"} py={"10px"} key={i}>
            Scrolled content
          </Text>
        ))}
      </Box>
    </Box>
  );
};
