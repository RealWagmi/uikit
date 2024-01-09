import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Token: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const id = uuid();
  return (
    <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
      <circle cx="16" cy="16" r="16" fill={`url(#${id})`} />
      <circle cx="16" cy="16" r="15.5" stroke="white" strokeOpacity="0.2" />
      <path
        d="M18.4101 15.0803L20.0844 12.3388L24.5976 19.1216L24.5997 20.4233L24.585 11.466C24.5743 11.247 24.4538 11.0467 24.2616 10.9286L16.1362 6.4187C15.9463 6.32852 15.7051 6.32957 15.5154 6.42155C15.4898 6.43388 15.4656 6.44738 15.4427 6.46211L15.4143 6.47928L7.52741 10.8894L7.49684 10.9028C7.45749 10.9202 7.41766 10.9424 7.38038 10.9682C7.2308 11.0717 7.13153 11.2247 7.09941 11.3963C7.09457 11.4223 7.091 11.4488 7.08936 11.4756L7.10175 18.7749L11.3055 12.4878C11.8348 11.6542 12.9879 11.3856 14.0584 11.4002L15.3148 11.4322L7.91198 22.8878L8.78462 23.3725L16.276 11.4439L19.5873 11.4323L12.1152 23.6619L15.229 25.3901L15.6011 25.5966C15.7584 25.6583 15.944 25.6614 16.1026 25.6061L24.3422 20.9986L22.7669 21.8794L18.4101 15.0803ZM19.0488 23.9585L15.9039 19.1956L17.8237 16.0521L21.9541 22.334L19.0488 23.9585Z"
        fill="#2D374B"
      />
      <path d="M15.9038 19.1956L19.0487 23.9586L21.954 22.334L17.8236 16.0521L15.9038 19.1956Z" fill="#28A0F0" />
      <path
        d="M24.5998 20.4233L24.5977 19.1216L20.0845 12.3387L18.4102 15.0803L22.767 21.8793L24.3422 20.9985C24.4968 20.8774 24.5903 20.6997 24.6001 20.508L24.5998 20.4233Z"
        fill="#28A0F0"
      />
      <path
        d="M5.6875 21.6508L7.91202 22.8877L15.3148 11.4322L14.0584 11.4002C12.9879 11.3856 11.8348 11.6542 11.3055 12.4878L7.10175 18.7749L5.6875 20.8717V21.6508Z"
        fill="white"
      />
      <path
        d="M19.5873 11.4323L16.2761 11.4439L8.78467 23.3725L11.4032 24.8272L12.1152 23.6619L19.5873 11.4323Z"
        fill="white"
      />
      <path
        d="M25.9952 11.4158C25.9675 10.7476 25.5925 10.1359 25.0052 9.77976L16.7733 5.21186C16.1924 4.92959 15.4666 4.92923 14.8846 5.21167C14.8158 5.24516 6.87934 9.68655 6.87934 9.68655C6.76949 9.73739 6.66369 9.79793 6.56418 9.86667C6.0399 10.2292 5.72033 10.7927 5.6875 11.4117V20.8717L7.10175 18.775L7.0894 11.4756C7.09104 11.4489 7.09452 11.4226 7.09945 11.3967C7.13143 11.225 7.2308 11.0718 7.38042 10.9682C7.41775 10.9424 15.4898 6.43389 15.5155 6.42152C15.7052 6.32958 15.9464 6.32849 16.1363 6.41867L24.2617 10.9285C24.4539 11.0466 24.5744 11.2469 24.5851 11.4659V20.508C24.5753 20.6997 24.4967 20.8774 24.3422 20.9985L22.767 21.8793L21.9541 22.3339L19.0489 23.9585L16.1027 25.606C15.944 25.6613 15.7585 25.6582 15.6011 25.5964L12.1152 23.6618L11.4031 24.8272L14.5358 26.5675C14.6394 26.6244 14.7316 26.6748 14.8074 26.7158C14.9247 26.7792 15.0046 26.8217 15.0328 26.8349C15.2555 26.9393 15.5758 27 15.8645 27C16.1292 27 16.3873 26.9531 16.6315 26.8608L25.1891 22.0787C25.6802 21.7115 25.9692 21.1577 25.9952 20.5578V11.4158Z"
        fill="#96BEDC"
      />
      <defs>
        <radialGradient
          id={id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 16) rotate(90) scale(16)"
        >
          <stop stopColor="#464352" />
          <stop offset="1" stopColor="#212936" />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default memo(Token);
