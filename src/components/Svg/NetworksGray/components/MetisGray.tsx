import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";
import { v4 as uuid } from "uuid";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  const id = uuid();
  return (
    <Svg viewBox="0 0 24 24" {...props} fill="none" stroke="none">
      <g clipPath={`url(#${id})`}>
        <path
          d="M21 11.9999C21 7.02945 16.9706 3 12 3C7.02936 3 3 7.02945 3 11.9999C3 16.9704 7.02936 20.9999 12 20.9999C16.9706 20.9999 21 16.9704 21 11.9999Z"
          fill="#AFB6C9"
        />
        <path
          d="M18.0738 11.5506C18.0738 11.5293 17.6842 11.2804 17.4792 11.1506C17.3907 11.095 17.3085 11.0299 17.234 10.9565C17.0806 10.8048 16.825 10.5396 16.742 10.3764C16.6886 10.2722 16.7106 10.0845 16.7521 9.90544C16.8241 9.59103 16.7696 9.26093 16.6003 8.98637L16.3337 8.55221C16.211 8.35415 16.1123 8.14218 16.0398 7.92077C15.9476 7.63628 15.7873 7.37862 15.5729 7.17018C15.1391 6.74706 13.9385 6.53874 12.9412 6.5055C12.8795 6.4869 12.8169 6.47199 12.7535 6.46086C12.3095 6.38526 11.8357 6.2631 11.4107 6.34242C10.7797 6.4599 10.1418 6.65766 9.66564 7.14558C9.56964 7.2441 9.41964 7.29054 9.3162 7.3839C9.11112 7.56894 8.835 7.56894 8.65284 7.77437C8.54616 7.89437 8.49684 8.28569 8.21724 8.43509C7.75476 8.68289 7.41252 8.95589 7.30044 9.09509C7.21572 9.19985 7.15008 9.32236 7.06764 9.4294C6.98364 9.5392 6.58512 9.72508 6.46932 9.84136C6.35352 9.95764 6.19824 10.2406 6.26796 10.5749C6.27444 10.6054 6.27996 10.6306 6.28392 10.651C6.32952 10.8209 6.45348 11.129 6.4248 11.2702C6.39144 11.4374 5.96136 12.6835 6.92232 13.0157C7.12236 13.0849 7.20708 13.2197 7.22892 13.4249C7.24584 13.578 7.29132 13.7351 7.37112 13.9042C7.4586 14.0886 7.6308 14.1889 7.64484 14.2012C7.7028 14.2523 7.97256 14.5338 7.99476 14.5748C8.33568 15.205 8.23992 15.5198 8.89248 15.7339C9.06014 15.7893 9.22113 15.8631 9.37248 15.954C9.55689 16.065 9.75442 16.1525 9.96048 16.2146C9.96648 16.2163 9.9756 16.2196 9.98628 16.2234C10.1312 15.8731 10.2782 15.5408 10.4248 15.2281C9.25008 14.0236 9.55896 12.6741 9.67164 12.3121C9.67498 12.3014 9.68095 12.2917 9.689 12.2839C9.69706 12.276 9.70695 12.2703 9.71777 12.2673C9.72859 12.2643 9.74 12.264 9.75095 12.2665C9.76191 12.269 9.77206 12.2742 9.78048 12.2817C10.027 12.4977 10.7765 13.2768 10.6885 14.6833C10.9477 14.1657 11.1998 13.7104 11.4301 13.3217C10.5824 11.8851 11.2141 10.6258 11.4132 10.2938C11.4191 10.284 11.4273 10.2758 11.4371 10.2701C11.447 10.2643 11.4581 10.2611 11.4695 10.2608C11.4809 10.2605 11.4922 10.2631 11.5024 10.2683C11.5125 10.2735 11.5212 10.2812 11.5276 10.2906C11.7004 10.5472 12.1699 11.3883 11.8792 12.6C12.09 12.2777 12.2611 12.0391 12.373 11.8894C12.6758 9.88636 14.1886 9.22912 14.5861 9.08981C14.5968 9.08601 14.6082 9.08496 14.6194 9.08675C14.6305 9.08853 14.6411 9.09311 14.65 9.10004C14.6589 9.10698 14.666 9.11605 14.6705 9.12643C14.675 9.1368 14.6768 9.14814 14.6758 9.15941C14.639 9.57364 14.3837 11.1687 12.629 11.9878C12.4182 12.2656 12.215 12.558 12.0208 12.858C12.6917 12.3343 13.632 12.0875 14.4132 12.2771C14.4242 12.2796 14.4345 12.2849 14.443 12.2923C14.4514 12.2998 14.458 12.3093 14.4619 12.3199C14.4658 12.3305 14.467 12.3419 14.4655 12.3531C14.4639 12.3643 14.4595 12.3749 14.4528 12.384C14.2282 12.6814 13.3348 13.6843 11.652 13.4545C11.3676 13.9339 11.107 14.4197 10.8756 14.8843C11.6022 14.3345 12.6641 14.1239 13.488 14.4007C13.499 14.4042 13.5089 14.4105 13.5168 14.4188C13.5248 14.4271 13.5305 14.4373 13.5335 14.4485C13.5365 14.4596 13.5366 14.4713 13.5339 14.4825C13.5312 14.4937 13.5257 14.504 13.518 14.5126C13.2622 14.7886 12.277 15.6918 10.6572 15.3331C10.5054 15.654 10.279 16.1816 10.1684 16.4424C10.1304 16.532 10.0954 16.6224 10.0643 16.7149C9.99228 16.9273 9.89628 17.1923 9.78096 17.4574C9.76473 17.4952 9.75645 17.5359 9.75664 17.577C9.75682 17.6182 9.76547 17.6588 9.78203 17.6965C9.7986 17.7341 9.82274 17.768 9.85294 17.7959C9.88314 17.8239 9.91877 17.8453 9.9576 17.8589C11.2358 18.3152 12.6236 18.3667 13.932 18.0061C13.9753 17.9939 14.0152 17.9721 14.0488 17.9422C14.0824 17.9124 14.1089 17.8754 14.1262 17.8339C14.1534 17.7692 14.1803 17.708 14.1803 17.708C14.1803 17.708 14.7452 16.3957 14.8283 15.824C14.861 15.5993 14.9263 15.4307 14.9936 15.308C15.0378 15.2279 15.1016 15.1603 15.1791 15.1116C15.2566 15.0629 15.3452 15.0347 15.4366 15.0298C15.8671 15.007 16.7839 14.9468 17.1174 14.8411C17.5607 14.7004 17.3684 13.8931 17.3447 13.806C17.3209 13.7189 17.5579 13.5167 17.6068 13.3986C17.6556 13.2805 17.4868 13.2401 17.418 13.1106C17.3492 12.9811 17.589 12.8878 17.6232 12.7702C17.6574 12.6526 17.5452 12.5232 17.4997 12.4362C17.4542 12.3492 17.4368 12.2404 17.4368 12.2404C17.4368 12.2404 17.7608 12.0029 17.9334 11.853C18.106 11.7031 18.0742 11.5798 18.0738 11.5506Z"
          fill="#0E1218"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="18" height="18" fill="white" transform="translate(3 3)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default memo(Item);