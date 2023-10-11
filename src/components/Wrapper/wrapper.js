import {Container} from '@mui/material';
import './wrapper.css'
export const Wrapper = ({children}) => {
    return (
        <Container className="container" >{children}</Container>
    )
}