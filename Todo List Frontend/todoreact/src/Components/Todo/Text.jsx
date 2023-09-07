import "../Styles/ItemForm.css";

export const Text = ({ done, children, ...events }) =>
  done ? <s {...events}>{children}</s> : <span {...events}>{children}</span>;