import { TabsWrap, TabWrap } from './styles';
import { ITabsProps } from './types';

export default function Tabs({ tabs, value, onChange }: ITabsProps) {
  return (
    <TabsWrap>
      {tabs.map((tab, i) => (
        <TabWrap
          key={`${tab.value}-${i}`}
          active={tab.value === value}
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
