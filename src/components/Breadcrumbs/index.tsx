import {ArrowLeftGray} from "../Svg";
import {createContext, ElementType, useContext} from "react";
export const MenuContext = createContext<{ linkComponent: ElementType }>({ linkComponent: "a" });

import {ArrowWrapper, Divider, LinkText, Text, Wrapper} from './styles'

interface ILink {
  lable: string
  link: string
}

interface IProps {
  links: ILink[]
}

export default function Breadcrumbs({ links }: IProps) {
  const {linkComponent} = useContext(MenuContext)
  return (
    <Wrapper>
      <ArrowWrapper><ArrowLeftGray /></ArrowWrapper>
      {links.map(({ lable, link }, index) => (
        <div key={index} style={{ display: 'flex' }}>
          <LinkText as={linkComponent} href={link}>
            <Text>{lable}</Text>
          </LinkText>
          {index !== links.length - 1 && <Divider>/</Divider>}
        </div>
      ))}
    </Wrapper>
  )
}
