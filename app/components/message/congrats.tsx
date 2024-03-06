import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button, DialogContentText } from '@mui/material';

type Props = {
    onCloseCongrats: () => void
}

export function Congrats({ onCloseCongrats }: Props) {
    return <Dialog
        open={true}
        onClose={onCloseCongrats}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Increible"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Ganaste!!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onCloseCongrats} autoFocus>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
}