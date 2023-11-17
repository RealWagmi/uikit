import { TabsWrap, TabWrap } from "./styles";
import { ITabsProps } from "./types";

export default function Tabs({ tabs, value, onChange, ...props }: ITabsProps) {
  return (
    <TabsWrap {...props}>
      {tabs.map((tab, i) => (
        <TabWrap
          key={`${tab.value}-${i}`}
          disabled={tab.value === value}
          onClick={() => {
            if (onChange) onChange(tab.value);
          }}
        >
          {tab.title || tab.value}
        </TabWrap>
      ))}
    </TabsWrap>
  );
}
