import react from "react";

export default function Section(props) {
  return (
    <div className="section">
      <h3>{props.content}</h3>
    </div>
  );
}
