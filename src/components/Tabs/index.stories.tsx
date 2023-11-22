import TabsComponent from "./Tabs";
import React, { useState } from "react";
import { Box } from "../Box";
import { TabValue } from "./types";

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
          { value: 1, title: "First" },
          { value: 2, title: "Second" },
          { value: 3, title: "Last" },
        ]}
        value={tab}
        onChange={(value) => setTab(() => value!)}
      />
    </Box>
  );
};
