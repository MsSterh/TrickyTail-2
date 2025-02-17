import Svg, { Path } from "react-native-svg";

export default function StarFullSvg(props) {
  return (
    <Svg height="19" viewBox="0 0 20 19" width="20" {...props}>
      <Path
        d="m10 15.27 6.18 3.73-1.64-7.03 5.46-4.73-7.19-.61-2.81-6.63-2.81 6.63-7.19.61 5.46 4.73-1.64 7.03z"
        fill="#867ea5"
      />
    </Svg>
  );
}
