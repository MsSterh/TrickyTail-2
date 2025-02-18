import Svg, { Path, SvgProps } from "react-native-svg";

export default function StarEmptySvg(props: SvgProps) {
  return (
    <Svg width={20} height={19} fill="none" {...props}>
      <Path
        stroke="#bcbac8"
        d="M10.258 14.842 10 14.686l-.258.156-5.166 3.118 1.37-5.876.07-.294-.229-.198-4.564-3.954 6.01-.51.3-.025.117-.278L10 1.281l2.35 5.544.117.278.3.025 6.01.51-4.564 3.954-.229.198.07.294 1.37 5.876z"
      />
    </Svg>
  );
}
