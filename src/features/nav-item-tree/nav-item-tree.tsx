import { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import style from './nav_item_tree.module.scss';

type NavItemTreeProps = {
    title: string | ReactNode;
    children: string | ReactNode | ReactNode[];
    className: string;
};

/**
 * Элемент для древовидного раскрытия списка элементов
 * @param title
 * @param children
 * @param className
 * @constructor
 */
export const NavItemTree = ({ title, children, className }: NavItemTreeProps) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className={style.navitem}>
            <div className={style.navitem__text} onClick={() => setOpen(!isOpen)}>
                {title}
                {isOpen ? <ChevronUp className={'mx-2'} /> : <ChevronDown className={'mx-2'} />}
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginTop: '10px',
                    marginBottom: '10px',
                }}
                className={isOpen ? 'tree-child mx-2' : 'tree-child mx-2 d-none'}
            >
                {children}
            </div>
        </div>
    );
};

