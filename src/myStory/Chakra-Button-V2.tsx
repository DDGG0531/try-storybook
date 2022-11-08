import classNames from "classnames";
import { Button } from "@chakra-ui/react";
interface Props {
  isCustomHeight?: boolean;
  colorScheme?: "familyBlue" | "familyGreen";
}

// ** 設計師回合：override Chakra's default
// 圓角

// ** props
// isCustomHeight: 一般 or 訂製高度

// recap
// 1. 如果合用，保留部分ChakraUI介面
// 2. 用設計師的版本覆蓋 ChakraUI內部預設
// 3. 增加自己的介面
// PS: 增加參數時，要注意該參數控制的css，是否也有被其他參數控制

export default function ChakraButtonV2(props: Props) {
  const { isCustomHeight = false, colorScheme = "familyBlue" } = props;
  const baseStyle = "!rounded";
  const extraStyle = [isCustomHeight ? "!h-[144px]" : ""];

  return (
    <Button
      colorScheme={colorScheme === "familyBlue" ? "blue" : "green"}
      className={classNames(baseStyle, extraStyle)}
    >
      ChakraButtonV2
    </Button>
  );
}
