
import { Ball, Container, Label } from "./style"


export const ToggleBtn = ({ isActive, onToggle, leftLabel, rightLabel }) => {

    return (
        <>
            <Container onClick={onToggle} $active={isActive}>
                <Ball $active={isActive} />
                <Label $active={isActive}>{isActive ? `${leftLabel}` : `${rightLabel}`}</Label>

            </Container>
        </>
    )
}