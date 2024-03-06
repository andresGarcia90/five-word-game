import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

type Props = {
    onCloseFailure: () => void
}

export function Failure({ onCloseFailure }: Props) {
    return <Dialog
        open={true}
        onClose={onCloseFailure}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Ups"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Perdiste!!
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onCloseFailure} autoFocus>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
}