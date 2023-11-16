import { FC, ReactElement, PropsWithChildren } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <circle cx="16" cy="16" r="16" fill="url(#paint0_radial_2855_61209)"/>
    <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.3596 12.6281L21.5394 10.3065V14.9497L17.3596 12.6281ZM21.5394 22.5779L15.9663 25.6734L10.3933 22.5779V17.1608L15.9663 20.2563L21.5394 17.1608V22.5779ZM10.3933 10.3065L14.5731 12.6281L10.3933 14.9497V10.3065ZM16.663 13.7337L20.8428 16.0553L16.663 18.3769V13.7337ZM15.2697 18.3769L11.0899 16.0553L15.2697 13.7337V18.3769ZM20.8428 9.201L15.9663 11.8543L11.0899 9.201L15.9663 6.43719L20.8428 9.201ZM9 8.75879V23.2412L15.9663 27L22.9327 23.2412V8.75879L15.9663 5L9 8.75879Z" fill="white"/>
    <defs>
      <radialGradient id="paint0_radial_2855_61209" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
        <stop stopColor="#C4F0FF"/>
        <stop offset="1" stopColor="#13B5EC"/>
      </radialGradient>
    </defs>
  </Svg>
);

export default Token;