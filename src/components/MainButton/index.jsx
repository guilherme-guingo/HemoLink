import { Button, LinkButton, IconWrapper } from './style';

export function MainButton({
  text,
  icon,
  background,
  color,
  radius,
  border,
  to,
  children,
  ...rest
}) {
  const iconNode = icon
    ? typeof icon === 'function'
      ? <icon />
      : icon
    : null;

  const content = text ?? children;
  const props = {
    $bg: background,
    $color: color,
    $radius: radius,
    $border: border,
    ...rest,
  };

  return to ? (
    <LinkButton to={to} {...props}>
      {iconNode && <IconWrapper>{iconNode}</IconWrapper>}
      {content}
    </LinkButton>
  ) : (
    <Button type="button" {...props}>
      {iconNode && <IconWrapper>{iconNode}</IconWrapper>}
      {content}
    </Button>
  );
}
