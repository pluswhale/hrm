import { FC, ReactElement } from "react";

import styles from './default-content-wrapper.module.scss';

type Props = {
    children: ReactElement[] | ReactElement,
}

export const DefaultContentWrapper: FC<Props> = ({children}): ReactElement => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}