import "./Paragraph.css";

interface Props {
  text: String;
}

function Paragraph({ text }: Props) {
  return <div className="about__paragraph">{text}</div>;
}

export default Paragraph;
