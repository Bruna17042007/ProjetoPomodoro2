import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { PublicOnlyRoute } from '../../components/PublicOnlyRoute';
import { Login } from '../../pages/Login';
import { Home } from '../../pages/Home';
import { History } from '../../pages/History';
import { NotFound } from '../../pages/NotFound';
import { Settings } from '../../pages/Settings';
export function MainRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicOnlyRoute>
                        <Login />
                    </PublicOnlyRoute>
                }
            />

            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/history"
                element={
                    <ProtectedRoute>
                        <History />
                    </ProtectedRoute>
                }
            />
<Route
    path="/settings"
    element={
        <ProtectedRoute>
            <Settings />
        </ProtectedRoute>
    }
/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}