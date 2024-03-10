import { Alert, Slide } from "@mui/material"

type Props = {
    show: boolean
}

export default function IncorrectWord(Props: Props) {
    return (
        <Slide direction="down" mountOnEnter unmountOnExit in={Props.show}>
            <div className="flex justify-center">
                <Alert variant="filled" severity="error" className="absolute max-w-50">Palabra invalida.</Alert>
            </div>
        </Slide>
    )
}
