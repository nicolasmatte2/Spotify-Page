import * as S from "./Link.styles";

interface ILink {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const Link = ({ onClick, label, className }: ILink) => {
  return (
    <S.Link onClick={onClick} className={className}>
      {label}
    </S.Link>
  );
};
