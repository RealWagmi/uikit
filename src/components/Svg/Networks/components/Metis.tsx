import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 32 32" {...props} fill="none" stroke="none">
    <rect width="32" height="32" rx="6" fill="#00D2FF" />
    <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" stroke="#FDFEFE" strokeOpacity="0.2" />
    <g clipPath="url(#clip0_7116_40316)">
      <path
        d="M31 15.9999C31 7.71576 24.2844 1 16 1C7.7156 1 1 7.71576 1 15.9999C1 24.284 7.7156 30.9998 16 30.9998C24.2844 30.9998 31 24.284 31 15.9999Z"
        fill="#00D2FF"
      />
      <path
        d="M26.1228 15.2511C26.1228 15.2155 25.4734 14.8007 25.1318 14.5843C24.9843 14.4917 24.8472 14.3833 24.7232 14.2609C24.4674 14.0081 24.0414 13.5661 23.9032 13.2941C23.8142 13.1203 23.8508 12.8075 23.92 12.5092C24.04 11.9851 23.9491 11.435 23.667 10.9774L23.2226 10.2538C23.0181 9.92366 22.8537 9.57037 22.7328 9.20137C22.5792 8.72722 22.312 8.29778 21.9546 7.95038C21.2316 7.24518 19.2306 6.89799 17.5684 6.84259C17.4657 6.81158 17.3613 6.78674 17.2556 6.76819C16.5156 6.64219 15.726 6.43859 15.0176 6.57079C13.966 6.76659 12.9028 7.09619 12.1092 7.90938C11.9492 8.07358 11.6992 8.15098 11.5268 8.30658C11.185 8.61497 10.7248 8.61497 10.4212 8.95737C10.2434 9.15737 10.1612 9.80957 9.6952 10.0586C8.9244 10.4716 8.354 10.9266 8.1672 11.1586C8.026 11.3332 7.9166 11.5374 7.7792 11.7158C7.6392 11.8988 6.975 12.2086 6.782 12.4024C6.589 12.5961 6.3302 13.0677 6.4464 13.6249C6.4572 13.6757 6.4664 13.7177 6.473 13.7517C6.549 14.0349 6.7556 14.5483 6.7078 14.7837C6.6522 15.0623 5.9354 17.1393 7.537 17.6929C7.8704 17.8083 8.0116 18.0329 8.048 18.3749C8.0762 18.6301 8.152 18.8919 8.285 19.1737C8.4308 19.4811 8.7178 19.6483 8.7412 19.6687C8.8378 19.7539 9.2874 20.2231 9.3244 20.2915C9.8926 21.3417 9.733 21.8665 10.8206 22.2233C11.1 22.3155 11.3683 22.4386 11.6206 22.5901C11.928 22.775 12.2572 22.921 12.6006 23.0245C12.6106 23.0273 12.6258 23.0327 12.6436 23.0391C12.8852 22.4553 13.1302 21.9015 13.3744 21.3803C11.4166 19.3727 11.9314 17.1235 12.1192 16.5203C12.1248 16.5024 12.1347 16.4862 12.1481 16.4732C12.1616 16.4601 12.1781 16.4506 12.1961 16.4456C12.2141 16.4405 12.2331 16.4401 12.2514 16.4443C12.2696 16.4484 12.2866 16.4571 12.3006 16.4695C12.7114 16.8295 13.9606 18.1281 13.814 20.4723C14.246 19.6095 14.6662 18.8507 15.05 18.2029C13.6372 15.8085 14.69 13.7097 15.0218 13.1563C15.0316 13.14 15.0453 13.1265 15.0617 13.1169C15.0781 13.1073 15.0967 13.1019 15.1157 13.1014C15.1347 13.1009 15.1535 13.1052 15.1704 13.1139C15.1873 13.1226 15.2018 13.1354 15.2124 13.1511C15.5004 13.5787 16.283 14.9805 15.7984 17.0001C16.1498 16.4629 16.435 16.0653 16.6214 15.8157C17.1262 12.4773 19.6474 11.382 20.31 11.1498C20.3278 11.1434 20.3468 11.1417 20.3654 11.1447C20.384 11.1476 20.4016 11.1553 20.4165 11.1668C20.4314 11.1784 20.4431 11.1935 20.4506 11.2108C20.4581 11.2281 20.4611 11.247 20.4594 11.2658C20.3982 11.9562 19.9726 14.6145 17.0482 15.9797C16.6968 16.4427 16.3582 16.9301 16.0344 17.4301C17.1526 16.5573 18.7198 16.1459 20.0218 16.4619C20.0402 16.4661 20.0572 16.4749 20.0714 16.4873C20.0855 16.4997 20.0964 16.5155 20.1029 16.5332C20.1095 16.5509 20.1115 16.5699 20.1089 16.5886C20.1062 16.6072 20.099 16.625 20.0878 16.6401C19.7134 17.1357 18.2244 18.8073 15.4198 18.4243C14.9458 19.2233 14.5114 20.0329 14.1258 20.8073C15.3368 19.8909 17.1066 19.5399 18.4798 20.0013C18.4981 20.0072 18.5146 20.0175 18.5278 20.0314C18.5411 20.0453 18.5506 20.0623 18.5556 20.0809C18.5606 20.0994 18.5608 20.1189 18.5563 20.1376C18.5518 20.1562 18.5427 20.1735 18.5298 20.1877C18.1034 20.6477 16.4614 22.1531 13.7618 21.5553C13.5088 22.0901 13.1314 22.9695 12.9472 23.4041C12.8838 23.5535 12.8254 23.7041 12.7736 23.8583C12.6536 24.2123 12.4936 24.6539 12.3014 25.0957C12.2744 25.1587 12.2606 25.2266 12.2609 25.2951C12.2612 25.3637 12.2756 25.4315 12.3032 25.4942C12.3308 25.557 12.371 25.6134 12.4214 25.66C12.4717 25.7065 12.5311 25.7422 12.5958 25.7649C14.7261 26.5255 17.0391 26.6112 19.2198 26.0103C19.2919 25.9899 19.3584 25.9535 19.4145 25.9038C19.4705 25.8541 19.5146 25.7924 19.5434 25.7233C19.5888 25.6155 19.6336 25.5135 19.6336 25.5135C19.6336 25.5135 20.5752 23.3263 20.7136 22.3735C20.7682 21.9989 20.877 21.7179 20.9892 21.5135C21.0628 21.3799 21.1691 21.2672 21.2983 21.186C21.4274 21.1049 21.5751 21.058 21.7274 21.0497C22.445 21.0117 23.973 20.9115 24.5288 20.7353C25.2676 20.5007 24.9472 19.1553 24.9076 19.0101C24.868 18.8649 25.263 18.5279 25.3444 18.3311C25.4258 18.1343 25.1444 18.0669 25.0298 17.8511C24.9152 17.6353 25.3148 17.4797 25.3718 17.2837C25.4288 17.0877 25.2418 16.8721 25.166 16.7271C25.0902 16.5821 25.0612 16.4007 25.0612 16.4007C25.0612 16.4007 25.6012 16.0049 25.8888 15.7551C26.1764 15.5053 26.1226 15.2995 26.122 15.2509"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_7116_40316">
        <rect width="30" height="30" fill="white" transform="translate(1 1)" />
      </clipPath>
    </defs>
  </Svg>
);

export default memo(Item);