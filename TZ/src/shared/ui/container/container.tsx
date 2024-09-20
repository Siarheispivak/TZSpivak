import {ReactNode} from 'react';

type ContainerProps = {
    children: ReactNode;
    className?: string;
}

export const Container = ({children, className}: ContainerProps) => {
    return <div className={className}>{children}</div>;
};
