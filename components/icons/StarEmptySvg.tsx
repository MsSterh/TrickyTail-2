import Svg, { Path } from "react-native-svg";

export default function StarEmptySvg(props) {
  return (
    <Svg height="19" viewBox="0 0 20 19" width="20" {...props}>
      <Path
        d="m10.2584 14.8419-.2584-.1559-.25837.1559-5.1655 3.1177 1.3708-5.876.06856-.2939-.2281-.1976-4.56431-3.95407 6.00919-.50982.30043-.02549.11766-.27761 2.34964-5.54381 2.3496 5.54381.1177.27761.3004.02549 6.0092.50982-4.5643 3.95407-.2281.1976.0686.2939 1.3708 5.876z"
        stroke="#bcbac8"
      />
    </Svg>
  );
}
