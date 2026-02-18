
import { useLocation } from 'react-router-dom';

export default function PageB() {

    const location = useLocation();

    const message = location.state?.message;

    return <h1>{message}</h1>;
}

