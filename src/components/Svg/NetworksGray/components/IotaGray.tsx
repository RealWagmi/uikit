import { FC, ReactElement, PropsWithChildren, memo } from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Item: FC<PropsWithChildren<SvgProps>> = (props): ReactElement => {
  return (
    <Svg viewBox="0 0 20 20" {...props} fill="none" stroke="none">
        <path d="M14.1602 3.15845C14.7577 3.15845 15.2422 2.67526 15.2422 2.07923C15.2422 1.48319 14.7577 1 14.1602 1C13.5626 1 13.0781 1.48319 13.0781 2.07923C13.0781 2.67526 13.5626 3.15845 14.1602 3.15845Z" fill="#AFB6C9"/>
        <path d="M15.3775 18.4027C15.975 18.4027 16.4595 17.9195 16.4595 17.3235C16.4595 16.7275 15.975 16.2443 15.3775 16.2443C14.7799 16.2443 14.2954 16.7275 14.2954 17.3235C14.2954 17.9195 14.7799 18.4027 15.3775 18.4027Z" fill="#AFB6C9"/>
        <path d="M14.4696 5.85659C14.9712 5.85659 15.3778 5.45104 15.3778 4.95079C15.3778 4.45054 14.9712 4.04504 14.4696 4.04504C13.9681 4.04504 13.5615 4.45054 13.5615 4.95079C13.5615 5.45104 13.9681 5.85659 14.4696 5.85659Z" fill="#AFB6C9"/>
        <path d="M16.8847 6.2034C17.3862 6.2034 17.7928 5.79785 17.7928 5.2976C17.7928 4.7974 17.3862 4.39185 16.8847 4.39185C16.3832 4.39185 15.9766 4.7974 15.9766 5.2976C15.9766 5.79785 16.3832 6.2034 16.8847 6.2034Z" fill="#AFB6C9"/>
        <path d="M14.1605 8.14991C14.5874 8.14991 14.9334 7.80475 14.9334 7.37906C14.9334 6.95331 14.5874 6.60815 14.1605 6.60815C13.7337 6.60815 13.3877 6.95331 13.3877 7.37906C13.3877 7.80475 13.7337 8.14991 14.1605 8.14991Z" fill="#AFB6C9"/>
        <path d="M16.5756 8.47766C17.0024 8.47766 17.3485 8.13256 17.3485 7.70681C17.3485 7.28106 17.0024 6.93591 16.5756 6.93591C16.1488 6.93591 15.8027 7.28106 15.8027 7.70681C15.8027 8.13256 16.1488 8.47766 16.5756 8.47766Z" fill="#AFB6C9"/>
        <path d="M18.5077 9.22913C18.9346 9.22913 19.2806 8.88398 19.2806 8.45823C19.2806 8.03248 18.9346 7.68738 18.5077 7.68738C18.0809 7.68738 17.7349 8.03248 17.7349 8.45823C17.7349 8.88398 18.0809 9.22913 18.5077 9.22913Z" fill="#AFB6C9"/>
        <path d="M15.8608 10.3276C16.2343 10.3276 16.5371 10.0257 16.5371 9.65314C16.5371 9.28064 16.2343 8.97864 15.8608 8.97864C15.4873 8.97864 15.1846 9.28064 15.1846 9.65314C15.1846 10.0257 15.4873 10.3276 15.8608 10.3276Z" fill="#AFB6C9"/>
        <path d="M13.4458 9.99981C13.8193 9.99981 14.122 9.69781 14.122 9.32526C14.122 8.95276 13.8193 8.65076 13.4458 8.65076C13.0723 8.65076 12.7695 8.95276 12.7695 9.32526C12.7695 9.69781 13.0723 9.99981 13.4458 9.99981Z" fill="#AFB6C9"/>
        <path d="M17.812 11.0792C18.1855 11.0792 18.4882 10.7772 18.4882 10.4046C18.4882 10.0321 18.1855 9.7301 17.812 9.7301C17.4385 9.7301 17.1357 10.0321 17.1357 10.4046C17.1357 10.7772 17.4385 11.0792 17.812 11.0792Z" fill="#AFB6C9"/>
        <path d="M14.8946 11.7343C15.2147 11.7343 15.4742 11.4755 15.4742 11.1562C15.4742 10.8369 15.2147 10.578 14.8946 10.578C14.5745 10.578 14.3149 10.8369 14.3149 11.1562C14.3149 11.4755 14.5745 11.7343 14.8946 11.7343Z" fill="#AFB6C9"/>
        <path d="M16.8463 12.4668C17.1664 12.4668 17.4259 12.2079 17.4259 11.8886C17.4259 11.5693 17.1664 11.3104 16.8463 11.3104C16.5261 11.3104 16.2666 11.5693 16.2666 11.8886C16.2666 12.2079 16.5261 12.4668 16.8463 12.4668Z" fill="#AFB6C9"/>
        <path d="M12.4986 11.3874C12.8187 11.3874 13.0782 11.1285 13.0782 10.8092C13.0782 10.4899 12.8187 10.2311 12.4986 10.2311C12.1785 10.2311 11.9189 10.4899 11.9189 10.8092C11.9189 11.1285 12.1785 11.3874 12.4986 11.3874Z" fill="#AFB6C9"/>
        <path d="M13.8317 12.6788C14.0984 12.6788 14.3147 12.4631 14.3147 12.197C14.3147 11.9309 14.0984 11.7152 13.8317 11.7152C13.5649 11.7152 13.3486 11.9309 13.3486 12.197C13.3486 12.4631 13.5649 12.6788 13.8317 12.6788Z" fill="#AFB6C9"/>
        <path d="M14.6624 14.0085C14.8972 14.0085 15.0875 13.8187 15.0875 13.5845C15.0875 13.3504 14.8972 13.1605 14.6624 13.1605C14.4276 13.1605 14.2373 13.3504 14.2373 13.5845C14.2373 13.8187 14.4276 14.0085 14.6624 14.0085Z" fill="#AFB6C9"/>
        <path d="M13.6388 14.2785C13.8309 14.2785 13.9866 14.1232 13.9866 13.9316C13.9866 13.7401 13.8309 13.5847 13.6388 13.5847C13.4468 13.5847 13.291 13.7401 13.291 13.9316C13.291 14.1232 13.4468 14.2785 13.6388 14.2785Z" fill="#AFB6C9"/>
        <path d="M12.7307 13.2762C12.9655 13.2762 13.1558 13.0864 13.1558 12.8522C13.1558 12.6181 12.9655 12.4282 12.7307 12.4282C12.496 12.4282 12.3057 12.6181 12.3057 12.8522C12.3057 13.0864 12.496 13.2762 12.7307 13.2762Z" fill="#AFB6C9"/>
        <path d="M11.4166 12.3513C11.6834 12.3513 11.8997 12.1356 11.8997 11.8695C11.8997 11.6034 11.6834 11.3877 11.4166 11.3877C11.1499 11.3877 10.9336 11.6034 10.9336 11.8695C10.9336 12.1356 11.1499 12.3513 11.4166 12.3513Z" fill="#AFB6C9"/>
        <path d="M11.3971 8.72788C11.6639 8.72788 11.8802 8.51213 11.8802 8.24608C11.8802 7.97998 11.6639 7.76428 11.3971 7.76428C11.1303 7.76428 10.9141 7.97998 10.9141 8.24608C10.9141 8.51213 11.1303 8.72788 11.3971 8.72788Z" fill="#AFB6C9"/>
        <path d="M11.6097 7.03203C11.8444 7.03203 12.0347 6.84218 12.0347 6.60803C12.0347 6.37388 11.8444 6.18408 11.6097 6.18408C11.3749 6.18408 11.1846 6.37388 11.1846 6.60803C11.1846 6.84218 11.3749 7.03203 11.6097 7.03203Z" fill="#AFB6C9"/>
        <path d="M12.0734 5.64436C12.2655 5.64436 12.4212 5.48906 12.4212 5.29746C12.4212 5.10586 12.2655 4.95056 12.0734 4.95056C11.8813 4.95056 11.7256 5.10586 11.7256 5.29746C11.7256 5.48906 11.8813 5.64436 12.0734 5.64436Z" fill="#AFB6C9"/>
        <path d="M11.262 4.98931C11.4967 4.98931 11.6871 4.79951 11.6871 4.56536C11.6871 4.33121 11.4967 4.14136 11.262 4.14136C11.0272 4.14136 10.8369 4.33121 10.8369 4.56536C10.8369 4.79951 11.0272 4.98931 11.262 4.98931Z" fill="#AFB6C9"/>
        <path d="M15.7643 13.411C16.031 13.411 16.2474 13.1952 16.2474 12.9292C16.2474 12.6631 16.031 12.4474 15.7643 12.4474C15.4975 12.4474 15.2812 12.6631 15.2812 12.9292C15.2812 13.1952 15.4975 13.411 15.7643 13.411Z" fill="#AFB6C9"/>
        <path d="M10.1607 4.4304C10.4275 4.4304 10.6438 4.2147 10.6438 3.9486C10.6438 3.6825 10.4275 3.4668 10.1607 3.4668C9.89399 3.4668 9.67773 3.6825 9.67773 3.9486C9.67773 4.2147 9.89399 4.4304 10.1607 4.4304Z" fill="#AFB6C9"/>
        <path d="M10.4889 6.47324C10.7557 6.47324 10.972 6.25754 10.972 5.99144C10.972 5.72534 10.7557 5.50964 10.4889 5.50964C10.2221 5.50964 10.0059 5.72534 10.0059 5.99144C10.0059 6.25754 10.2221 6.47324 10.4889 6.47324Z" fill="#AFB6C9"/>
        <path d="M9.9483 8.41961C10.2684 8.41961 10.528 8.16076 10.528 7.84146C10.528 7.52216 10.2684 7.26331 9.9483 7.26331C9.62815 7.26331 9.36865 7.52216 9.36865 7.84146C9.36865 8.16076 9.62815 8.41961 9.9483 8.41961Z" fill="#AFB6C9"/>
        <path d="M8.18992 8.41943C8.56337 8.41943 8.86617 8.11743 8.86617 7.74494C8.86617 7.37239 8.56337 7.07043 8.18992 7.07043C7.81642 7.07043 7.51367 7.37239 7.51367 7.74494C7.51367 8.11743 7.81642 8.41943 8.18992 8.41943Z" fill="#AFB6C9"/>
        <path d="M6.14199 8.8822C6.56884 8.8822 6.91489 8.53705 6.91489 8.11135C6.91489 7.6856 6.56884 7.34045 6.14199 7.34045C5.71514 7.34045 5.36914 7.6856 5.36914 8.11135C5.36914 8.53705 5.71514 8.8822 6.14199 8.8822Z" fill="#AFB6C9"/>
        <path d="M3.90077 9.98086C4.40232 9.98086 4.80892 9.57536 4.80892 9.07511C4.80892 8.57486 4.40232 8.16931 3.90077 8.16931C3.39927 8.16931 2.99268 8.57486 2.99268 9.07511C2.99268 9.57536 3.39927 9.98086 3.90077 9.98086Z" fill="#AFB6C9"/>
        <path d="M1.58202 11.8308C2.17959 11.8308 2.66402 11.3477 2.66402 10.7516C2.66402 10.1556 2.17959 9.67236 1.58202 9.67236C0.984435 9.67236 0.5 10.1556 0.5 10.7516C0.5 11.3477 0.984435 11.8308 1.58202 11.8308Z" fill="#AFB6C9"/>
        <path d="M2.99308 7.72598C3.49462 7.72598 3.90122 7.32043 3.90122 6.82018C3.90122 6.31993 3.49462 5.91443 2.99308 5.91443C2.49154 5.91443 2.08496 6.31993 2.08496 6.82018C2.08496 7.32043 2.49154 7.72598 2.99308 7.72598Z" fill="#AFB6C9"/>
        <path d="M5.23384 6.62732C5.66069 6.62732 6.00669 6.28222 6.00669 5.85647C6.00669 5.43072 5.66069 5.08557 5.23384 5.08557C4.80699 5.08557 4.46094 5.43072 4.46094 5.85647C4.46094 6.28222 4.80699 6.62732 5.23384 6.62732Z" fill="#AFB6C9"/>
        <path d="M4.90517 4.58447C5.33202 4.58447 5.67802 4.23937 5.67802 3.81362C5.67802 3.38787 5.33202 3.04272 4.90517 3.04272C4.47832 3.04272 4.13232 3.38787 4.13232 3.81362C4.13232 4.23937 4.47832 4.58447 4.90517 4.58447Z" fill="#AFB6C9"/>
        <path d="M6.95359 4.122C7.32709 4.122 7.62984 3.82 7.62984 3.44745C7.62984 3.07495 7.32709 2.77295 6.95359 2.77295C6.58009 2.77295 6.27734 3.07495 6.27734 3.44745C6.27734 3.82 6.58009 4.122 6.95359 4.122Z" fill="#AFB6C9"/>
        <path d="M8.71149 4.122C9.03164 4.122 9.29114 3.86315 9.29114 3.54385C9.29114 3.22455 9.03164 2.9657 8.71149 2.9657C8.39134 2.9657 8.13184 3.22455 8.13184 3.54385C8.13184 3.86315 8.39134 4.122 8.71149 4.122Z" fill="#AFB6C9"/>
        <path d="M9.0401 6.16477C9.36025 6.16477 9.61975 5.90592 9.61975 5.58662C9.61975 5.26727 9.36025 5.00842 9.0401 5.00842C8.72 5.00842 8.46045 5.26727 8.46045 5.58662C8.46045 5.90592 8.72 6.16477 9.0401 6.16477Z" fill="#AFB6C9"/>
        <path d="M7.28172 6.18408C7.65522 6.18408 7.95802 5.88208 7.95802 5.50958C7.95802 5.13703 7.65522 4.83508 7.28172 4.83508C6.90827 4.83508 6.60547 5.13703 6.60547 5.50958C6.60547 5.88208 6.90827 6.18408 7.28172 6.18408Z" fill="#AFB6C9"/>
        <path d="M5.36928 11.3103C5.56133 11.3103 5.71708 11.155 5.71708 10.9634C5.71708 10.7719 5.56133 10.6166 5.36928 10.6166C5.17718 10.6166 5.02148 10.7719 5.02148 10.9634C5.02148 11.155 5.17718 11.3103 5.36928 11.3103Z" fill="#AFB6C9"/>
        <path d="M6.76001 11.137C6.99481 11.137 7.18511 10.9472 7.18511 10.7131C7.18511 10.4789 6.99481 10.2891 6.76001 10.2891C6.52526 10.2891 6.33496 10.4789 6.33496 10.7131C6.33496 10.9472 6.52526 11.137 6.76001 11.137Z" fill="#AFB6C9"/>
        <path d="M8.28676 10.5591C8.55356 10.5591 8.76981 10.3434 8.76981 10.0773C8.76981 9.81116 8.55356 9.59546 8.28676 9.59546C8.02001 9.59546 7.80371 9.81116 7.80371 10.0773C7.80371 10.3434 8.02001 10.5591 8.28676 10.5591Z" fill="#AFB6C9"/>
        <path d="M8.65387 12.1006C8.97397 12.1006 9.23352 11.8418 9.23352 11.5225C9.23352 11.2032 8.97397 10.9443 8.65387 10.9443C8.33372 10.9443 8.07422 11.2032 8.07422 11.5225C8.07422 11.8418 8.33372 12.1006 8.65387 12.1006Z" fill="#AFB6C9"/>
        <path d="M6.79897 12.4667C7.06577 12.4667 7.28202 12.251 7.28202 11.9849C7.28202 11.7188 7.06577 11.5031 6.79897 11.5031C6.53222 11.5031 6.31592 11.7188 6.31592 11.9849C6.31592 12.251 6.53222 12.4667 6.79897 12.4667Z" fill="#AFB6C9"/>
        <path d="M5.15655 12.4474C5.3913 12.4474 5.5816 12.2575 5.5816 12.0234C5.5816 11.7892 5.3913 11.5994 5.15655 11.5994C4.9218 11.5994 4.73145 11.7892 4.73145 12.0234C4.73145 12.2575 4.9218 12.4474 5.15655 12.4474Z" fill="#AFB6C9"/>
        <path d="M5.17543 13.7773C5.44223 13.7773 5.65848 13.5616 5.65848 13.2955C5.65848 13.0295 5.44223 12.8137 5.17543 12.8137C4.90868 12.8137 4.69238 13.0295 4.69238 13.2955C4.69238 13.5616 4.90868 13.7773 5.17543 13.7773Z" fill="#AFB6C9"/>
        <path d="M7.14654 14.0278C7.46664 14.0278 7.72619 13.7689 7.72619 13.4496C7.72619 13.1303 7.46664 12.8715 7.14654 12.8715C6.82639 12.8715 6.56689 13.1303 6.56689 13.4496C6.56689 13.7689 6.82639 14.0278 7.14654 14.0278Z" fill="#AFB6C9"/>
        <path d="M9.44578 13.7773C9.81923 13.7773 10.122 13.4753 10.122 13.1028C10.122 12.7302 9.81923 12.4282 9.44578 12.4282C9.07228 12.4282 8.76953 12.7302 8.76953 13.1028C8.76953 13.4753 9.07228 13.7773 9.44578 13.7773Z" fill="#AFB6C9"/>
        <path d="M10.7982 15.4537C11.2251 15.4537 11.5711 15.1086 11.5711 14.6828C11.5711 14.2571 11.2251 13.912 10.7982 13.912C10.3714 13.912 10.0254 14.2571 10.0254 14.6828C10.0254 15.1086 10.3714 15.4537 10.7982 15.4537Z" fill="#AFB6C9"/>
        <path d="M7.95848 15.6851C8.33198 15.6851 8.63473 15.3831 8.63473 15.0106C8.63473 14.6381 8.33198 14.3361 7.95848 14.3361C7.58503 14.3361 7.28223 14.6381 7.28223 15.0106C7.28223 15.3831 7.58503 15.6851 7.95848 15.6851Z" fill="#AFB6C9"/>
        <path d="M6.35403 16.9955C6.72748 16.9955 7.03028 16.6935 7.03028 16.321C7.03028 15.9484 6.72748 15.6465 6.35403 15.6465C5.98053 15.6465 5.67773 15.9484 5.67773 16.321C5.67773 16.6935 5.98053 16.9955 6.35403 16.9955Z" fill="#AFB6C9"/>
        <path d="M7.68745 18.6915C8.11425 18.6915 8.4603 18.3464 8.4603 17.9206C8.4603 17.4949 8.11425 17.1498 7.68745 17.1498C7.2606 17.1498 6.91455 17.4949 6.91455 17.9206C6.91455 18.3464 7.2606 18.6915 7.68745 18.6915Z" fill="#AFB6C9"/>
        <path d="M11.2431 19C11.7446 19 12.1512 18.5945 12.1512 18.0942C12.1512 17.594 11.7446 17.1885 11.2431 17.1885C10.7416 17.1885 10.335 17.594 10.335 18.0942C10.335 18.5945 10.7416 19 11.2431 19Z" fill="#AFB6C9"/>
        <path d="M9.2914 17.381C9.71825 17.381 10.0643 17.0358 10.0643 16.6101C10.0643 16.1843 9.71825 15.8392 9.2914 15.8392C8.86455 15.8392 8.51855 16.1843 8.51855 16.6101C8.51855 17.0358 8.86455 17.381 9.2914 17.381Z" fill="#AFB6C9"/>
        <path d="M12.7304 17.0729C13.2319 17.0729 13.6385 16.6674 13.6385 16.1672C13.6385 15.6669 13.2319 15.2614 12.7304 15.2614C12.2289 15.2614 11.8223 15.6669 11.8223 16.1672C11.8223 16.6674 12.2289 17.0729 12.7304 17.0729Z" fill="#AFB6C9"/>
        <path d="M5.54254 15.3383C5.86264 15.3383 6.12219 15.0795 6.12219 14.7602C6.12219 14.4409 5.86264 14.182 5.54254 14.182C5.22239 14.182 4.96289 14.4409 4.96289 14.7602C4.96289 15.0795 5.22239 15.3383 5.54254 15.3383Z" fill="#AFB6C9"/>
    </Svg>
  );
};

export default memo(Item);
