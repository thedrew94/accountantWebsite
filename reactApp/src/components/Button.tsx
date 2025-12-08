import { svgSelector } from "../utils/svgSelector";

interface Props {
  btnType: "button" | "link" | "submit" | "download";
  text: string;
  href?: string;
  icon?: string | null;
  cbFunc?: () => void;
  btnStyle?: "normal" | "inverted";
}

// @ts-ignore
export default function Button({
  btnType = "button",
  text = "",
  href = "",
  icon = null,
  cbFunc = () => {},
  btnStyle = "normal",
}: Props) {
  return btnType === "button" ? (
    <button
      type="button"
      className={`button_default ${btnStyle === "normal" ? "button_normal" : "button_inverted"}`}
      onClick={() => {
        cbFunc();
      }}
    >
      {text}
    </button>
  ) : btnType === "download" ? (
    <a
      href={href}
      className={`button_default ${btnStyle === "normal" ? "button_normal" : "button_inverted"}`}
      download={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && svgSelector({ svgName: icon, svgWidth: "18px", svgHeight: "18px", svgFill: "#c6a163" })}
      <p>{text}</p>
    </a>
  ) : (
    <a href={href} className={`button_default ${btnStyle === "normal" ? "button_normal" : "button_inverted"}`}>
      {icon && svgSelector({ svgName: icon, svgWidth: "18px", svgHeight: "18px", svgFill: "#c6a163" })}
      <p>{text}</p>
    </a>
  );
}
