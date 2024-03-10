import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button, DialogContentText } from '@mui/material';

type Props = {
    onCloseInfo: () => void
}

export function Congrats({ onCloseInfo }: Props) {
    return <Dialog
        open={true}
        onClose={onCloseInfo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Como jugar"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <p>El objetivo del juego es simple, adivinar la palabra oculta. La palabra tiene 5 letras y tienes 6 intentos para adivinarla. La palabra es la misma para todas las personas en ese día.</p>

                Cada intento debe ser una palabra válida. En cada ronda el juego pinta cada letra de un color indicando si esa letra se encuentra o no en la palabra y si se encuentra en la posición correcta.

                VERDE significa que la letra está en la palabra y en la posición CORRECTA.
                AMARILLO significa que la letra letra está presente en la palabra pero en la posición INCORRECTA.
                GRIS significa que la letra letra NO está presente en la palabra.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onCloseInfo} autoFocus>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
}