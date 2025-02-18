import Svg, { Path, SvgProps } from "react-native-svg";

export default function StarFullSvg(props: SvgProps) {
  return (
    <Svg width={20} height={19} {...props}>
      <Path
        fill="#867ea5"
        d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"
      />
    </Svg>
  );
}
