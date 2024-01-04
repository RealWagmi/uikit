import TabsComponent from "./Tabs";
import React, { useState } from "react";
import { Box, Flex } from "../Box";
import { TabValue } from "./types";
import { QuestionIcon } from "../Svg";

export default {
  title: "Components/Tabs",
  component: TabsComponent,
  argTypes: {},
};

export const Tabs = () => {
  const [tab, setTab] = useState<TabValue>(1);
  return (
    <Box>
      <TabsComponent
        tabs={[
          { value: 1, title: "First tab" },
          {
            value: 2,
            title: (
              <Flex alignItems={"center"}>
                Second custom tab
                <QuestionIcon color={"red"} ml={"8px"} />
              </Flex>
            ),
          },
          { value: 3, title: "Last tab" },
        ]}
        value={tab}
        onChange={(value) => setTab(() => value!)}
      />
    </Box>
  );
};
