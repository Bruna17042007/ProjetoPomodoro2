// No arquivo index.tsx da pasta ProtectedRoute:
import { Navigate } from 'react-router-dom'; 
import { useAuthContext } from '../../contexts/TaskContext/AuthContext';

type ProtectedRouteProps = {
    children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const authContext = useAuthContext();

    if (!authContext?.isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}