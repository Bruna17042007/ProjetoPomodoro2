import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/TaskContext/AuthContext';

type PublicOnlyRouteProps = {
    children: React.ReactNode;
};

export function PublicOnlyRoute({ children }: PublicOnlyRouteProps) {
    const authContext = useAuthContext();

    if (authContext?.isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    return <>{children}</>;
}