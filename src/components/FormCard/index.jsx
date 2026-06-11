import { Card, Title } from './style';

export function FormCard({ title, onSubmit, children, maxWidth, ...rest }) {
  
  const handleInternalSubmit = (event) => {
    event.preventDefault(); 
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <Card onSubmit={handleInternalSubmit} $maxWidth={maxWidth} {...rest}>
      {title && <Title>{title}</Title>}
      {children}
    </Card>
  );
}