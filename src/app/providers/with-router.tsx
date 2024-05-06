import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {Spinner} from "react-bootstrap";

export const withRouter = (component: () => React.ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback={
            <Spinner animation={"border"} role={"status"}>
                <span>Loading...</span>
            </Spinner>
        }>
            {component()}
        </Suspense>
    </BrowserRouter>
);