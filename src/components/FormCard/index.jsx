import { Card, Title } from './style';

export function FormCard({ title, onSubmit, children, maxWidth, ...rest }) {
  return (
    <Card onSubmit={onSubmit} $maxWidth={maxWidth} {...rest}>
      {title && <Title>{title}</Title>}
      {children}
    </Card>
  );
}