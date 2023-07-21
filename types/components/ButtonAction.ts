export interface ButtonActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | JSX.Element;
  copy?: string;
  clickText?: string;
}
