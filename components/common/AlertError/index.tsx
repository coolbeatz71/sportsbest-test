import { FC } from 'react';

export interface IAlertErrorProps {
    message: string;
}

const ErrorAlert: FC<IAlertErrorProps> = ({ message }) => (
    <div className="rounded rounded-md bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
        <p className="font-bold">Be Warned</p>
        <p>{message}</p>
    </div>
);

export default ErrorAlert;
