import { svgSelector } from "../utils/svgSelector";

interface Props {
  btnType: "button" | "link";
  text: string;
  href?: string;
  icon?: string | null;
  cbFunc?: () => void;
}

export default function Button({ btnType = "button", text = "", href = "", icon = null, cbFunc = () => {} }: Props) {
  return btnType === "button" ? (
    <button className="button_standard">{text}</button>
  ) : (
    <a href="#" className="button_standard">
      {icon && svgSelector({ svgName: icon, svgWidth: "18px", svgHeight: "18px", svgFill: "#c6a163" })}
      <p>{text}</p>
    </a>
  );
}
