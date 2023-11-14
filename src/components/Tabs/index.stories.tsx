import TabsComponent from "./index";
import { useState } from "react";
import { Box } from "../Box";

export default {
  title: "Components/Tabs",
  component: TabsComponent,
  argTypes: {},
};

export const Tabs = () => {
  const [tab, setTab] = useState(1);
  return (
    <Box>
      <TabsComponent
        tabs={[
          { value: 1, title: "First" },
          { value: 2, title: "Second" },
          { value: 3, title: "Last" },
        ]}
        value={tab}
        onChange={setTab}
      />
    </Box>
  );
};
