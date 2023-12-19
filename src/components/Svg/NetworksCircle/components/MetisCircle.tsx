import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => (
  <Svg viewBox="0 0 16 16" {...props} fill="none" stroke="none">
    <g clipPath="url(#clip0_7116_40341)">
      <path
        d="M16 7.99995C16 3.58174 12.4183 0 8 0C3.58165 0 0 3.58174 0 7.99995C0 12.4182 3.58165 15.9999 8 15.9999C12.4183 15.9999 16 12.4182 16 7.99995Z"
        fill="#00D2FF"
      />
      <path
        d="M8 0.5C12.1422 0.5 15.5 3.85788 15.5 7.99995C15.5 12.142 12.1422 15.4999 8 15.4999C3.8578 15.4999 0.5 12.142 0.5 7.99995C0.5 3.85788 3.8578 0.5 8 0.5Z"
        stroke="#FDFEFE"
        strokeOpacity="0.2"
      />
      <path
        d="M13.3992 7.60061C13.3992 7.58162 13.0528 7.3604 12.8706 7.24498C12.7919 7.19558 12.7189 7.13774 12.6527 7.0725C12.5163 6.93768 12.2891 6.70195 12.2154 6.55688C12.1679 6.46419 12.1874 6.29736 12.2243 6.13822C12.2883 5.85874 12.2398 5.56532 12.0894 5.32126L11.8524 4.93534C11.7433 4.75929 11.6556 4.57087 11.5912 4.37407C11.5092 4.12119 11.3667 3.89215 11.1761 3.70687C10.7905 3.33077 9.72331 3.1456 8.83681 3.11605C8.78204 3.09951 8.72633 3.08626 8.66998 3.07637C8.27531 3.00917 7.85419 2.90059 7.47638 2.97109C6.91553 3.07552 6.34849 3.2513 5.92523 3.68501C5.8399 3.77258 5.70657 3.81386 5.61462 3.89684C5.43233 4.06132 5.18689 4.06132 5.02497 4.24394C4.93014 4.3506 4.8863 4.69844 4.63777 4.83124C4.22667 5.0515 3.92246 5.29417 3.82283 5.4179C3.74753 5.51102 3.68918 5.61993 3.6159 5.71507C3.54123 5.81267 3.18699 5.9779 3.08406 6.08126C2.98113 6.18462 2.8431 6.43614 2.90507 6.73331C2.91083 6.7604 2.91574 6.7828 2.91926 6.80093C2.95979 6.95197 3.06998 7.22578 3.04449 7.35133C3.01483 7.49991 2.63254 8.60764 3.48673 8.90289C3.66454 8.96444 3.73985 9.08422 3.75926 9.26662C3.7743 9.40273 3.81473 9.54235 3.88566 9.69265C3.96342 9.85659 4.11649 9.94577 4.12897 9.95665C4.18049 10.0021 4.42027 10.2523 4.44001 10.2888C4.74305 10.8489 4.65793 11.1288 5.23798 11.3191C5.38701 11.3683 5.53011 11.4339 5.66465 11.5147C5.82857 11.6134 6.00414 11.6912 6.18731 11.7464C6.19265 11.7479 6.20075 11.7508 6.21025 11.7542C6.3391 11.4428 6.46977 11.1475 6.60001 10.8695C5.55585 9.79878 5.83041 8.59921 5.93057 8.27751C5.93353 8.26797 5.93884 8.25933 5.946 8.25237C5.95316 8.2454 5.96195 8.24035 5.97157 8.23765C5.98119 8.23496 5.99133 8.23472 6.00107 8.23694C6.0108 8.23917 6.01982 8.24381 6.02731 8.25042C6.24641 8.44241 6.91265 9.135 6.83446 10.3852C7.06486 9.92507 7.28897 9.52038 7.49366 9.17489C6.74017 7.89789 7.30166 6.77853 7.47862 6.48339C7.48383 6.47469 7.49115 6.46744 7.4999 6.46232C7.50865 6.4572 7.51855 6.45438 7.52868 6.4541C7.53882 6.45382 7.54886 6.45611 7.55788 6.46074C7.5669 6.46538 7.5746 6.47221 7.58027 6.48061C7.73387 6.70867 8.15126 7.45629 7.89281 8.5334C8.08022 8.2469 8.23233 8.03484 8.33174 7.90172C8.60097 6.12126 9.94561 5.53705 10.299 5.41321C10.3085 5.40983 10.3186 5.4089 10.3286 5.41049C10.3385 5.41208 10.3478 5.41614 10.3558 5.42231C10.3637 5.42847 10.37 5.43654 10.374 5.44576C10.378 5.45498 10.3796 5.46506 10.3787 5.47507C10.346 5.84329 10.119 7.26109 8.55937 7.98919C8.37195 8.23612 8.19137 8.49607 8.01867 8.76273C8.61505 8.29724 9.45089 8.07783 10.1453 8.24636C10.1551 8.24861 10.1642 8.25326 10.1717 8.2599C10.1793 8.26653 10.1851 8.27495 10.1886 8.28437C10.1921 8.2938 10.1931 8.30395 10.1917 8.31391C10.1903 8.32386 10.1865 8.33331 10.1805 8.3414C9.98081 8.60572 9.18667 9.49723 7.69089 9.29297C7.43809 9.7191 7.20641 10.1509 7.00075 10.5639C7.64662 10.0752 8.59051 9.88795 9.32289 10.134C9.33264 10.1372 9.34145 10.1427 9.34851 10.1501C9.35557 10.1575 9.36067 10.1666 9.36332 10.1765C9.36597 10.1864 9.3661 10.1968 9.3637 10.2067C9.36129 10.2167 9.35643 10.2259 9.34955 10.2334C9.12214 10.4788 8.24641 11.2816 6.80662 10.9628C6.67169 11.248 6.47041 11.7171 6.37217 11.9488C6.33835 12.0285 6.30721 12.1088 6.27958 12.1911C6.21558 12.3799 6.13025 12.6154 6.02774 12.851C6.01331 12.8846 6.00596 12.9208 6.00612 12.9574C6.00628 12.994 6.01397 13.0301 6.02869 13.0636C6.04342 13.0971 6.06487 13.1272 6.09172 13.152C6.11857 13.1768 6.15023 13.1959 6.18475 13.2079C7.32091 13.6136 8.55449 13.6593 9.71755 13.3388C9.756 13.328 9.79149 13.3086 9.82138 13.282C9.85126 13.2555 9.87477 13.2226 9.89014 13.1857C9.91435 13.1283 9.93825 13.0739 9.93825 13.0739C9.93825 13.0739 10.4404 11.9074 10.5142 11.3992C10.5434 11.1994 10.6014 11.0495 10.6612 10.9405C10.7005 10.8693 10.7572 10.8092 10.8261 10.7659C10.8949 10.7226 10.9737 10.6976 11.0549 10.6932C11.4377 10.6729 12.2526 10.6195 12.549 10.5255C12.943 10.4004 12.7722 9.68283 12.751 9.60539C12.7299 9.52795 12.9406 9.34822 12.984 9.24326C13.0274 9.1383 12.8773 9.10236 12.8162 8.98726C12.7551 8.87217 12.9682 8.78919 12.9986 8.68465C13.029 8.58012 12.9293 8.46513 12.8889 8.3878C12.8484 8.31047 12.833 8.21372 12.833 8.21372C12.833 8.21372 13.121 8.00263 13.2744 7.86941C13.4277 7.73618 13.399 7.62642 13.3987 7.6005"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_7116_40341">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Svg>
);

export default memo(Item);
