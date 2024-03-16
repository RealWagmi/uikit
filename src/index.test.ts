import { expect, test } from "vitest";
import * as exports from "./index";

test("exports", () => {
  expect(Object.keys(exports)).toMatchInlineSnapshot(`
    [
      "Box",
      "MotionBox",
      "LazyMotion",
      "AnimatePresence",
      "domAnimation",
      "Flex",
      "Grid",
      "Row",
      "RowBetween",
      "AutoRow",
      "RowFixed",
      "ArrowLeftIcon",
      "QuestionIcon",
      "InfoIcon",
      "ArrowDownIcon",
      "SortIcon",
      "SettingsIcon",
      "WarningIcon",
      "ClearIcon",
      "CloseIcon",
      "SwapArrowIcon",
      "CheckIcon",
      "ShareIcon",
      "SquareArrowIcon",
      "ChartBarIcon",
      "PlusIcon",
      "MinusIcon",
      "CircularArrowsIcon",
      "ZoomInIcon",
      "ZoomOutIcon",
      "LockIcon",
      "DatabaseIcon",
      "ArrowUpRightIcon",
      "SuccessIcon",
      "LineGraphIcon",
      "FilterIcon",
      "WarningOctagonIcon",
      "EqualSignIcon",
      "WalletIcon",
      "ExitIcon",
      "CopyIcon",
      "AvaxToken",
      "BnbToken",
      "EthToken",
      "FtmToken",
      "GmiToken",
      "KavaToken",
      "MaticToken",
      "sWagmiToken",
      "WagmiToken",
      "ArbToken",
      "MetisToken",
      "ArbitrumChain",
      "AvalancheChain",
      "BscChain",
      "EthereumChain",
      "FantomChain",
      "KavaEvmChain",
      "OptimismChain",
      "PolygonChain",
      "ZkSyncEraChain",
      "MetisChain",
      "ArbitrumCircleChain",
      "AvalancheCircleChain",
      "BscCircleChain",
      "EthereumCircleChain",
      "FantomCircleChain",
      "KavaEvmCircleChain",
      "OptimismCircleChain",
      "PolygonCircleChain",
      "ZkSyncEraCircleChain",
      "MetisCircleChain",
      "MetaMask",
      "BinanceWallet",
      "CoinbaseWallet",
      "Rabby",
      "WalletConnect",
      "DiscordIcon",
      "GithubIcon",
      "MediumIcon",
      "TelegramIcon",
      "TwitterIcon",
      "KinetixIconProtocol",
      "SushiIconProtocol",
      "UniswapIconProtocol",
      "WagmiIconProtocol",
      "AppLogo",
      "ShipImage",
      "Breadcrumbs",
      "LoadingSpinner",
      "LoadingBubble",
      "TerminalChart",
      "DensityChart",
      "Text",
      "Button",
      "Toggle",
      "Checkbox",
      "RadioButton",
      "Tabs",
      "Dropdown",
      "Table",
      "TableServer",
      "Tooltip",
      "Menu",
      "Modal",
      "GradientWrap",
      "RangeChip",
      "dark",
      "light",
      "UIKitProvider",
      "useChainSvgLogo",
      "useCircleChainSvgLogo",
      "useNativeTokenSvgLogo",
      "useProtocolLogo",
      "useOnClickOutside",
      "getChainLogo",
      "getProtocolLogo",
      "ResetCSS",
    ]
  `);
});
