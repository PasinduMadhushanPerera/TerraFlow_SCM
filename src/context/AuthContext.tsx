import React, { useEffect, useState, createContext, useContext } from 'react';
type UserRole = 'admin' | 'supplier' | 'customer' | null;
type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
} | null;
interface AuthContextType {
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<void>;
  register: (userData: any, role: 'supplier' | 'customer') => Promise<void>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    // Check localStorage for saved user data
    const savedUser = localStorage.getItem('terraflow_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);
  const login = async (email: string, password: string, remember: boolean) => {
    setLoading(true);
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Hard-coded admin login for demo
      if (email === 'admin@terraflow.com' && password === 'admin123') {
        const adminUser = {
          id: 'admin-1',
          name: 'Admin User',
          email: 'admin@terraflow.com',
          role: 'admin' as UserRole
        };
        setUser(adminUser);
        if (remember) {
          localStorage.setItem('terraflow_user', JSON.stringify(adminUser));
        }
        return;
      }
      // Mock login for other users (in a real app, this would be an API call)
      let mockUser = null;
      if (email.includes('supplier')) {
        mockUser = {
          id: 'supplier-1',
          name: 'Supplier User',
          email,
          role: 'supplier' as UserRole
        };
      } else {
        mockUser = {
          id: 'customer-1',
          name: 'Customer User',
          email,
          role: 'customer' as UserRole
        };
      }
      setUser(mockUser);
      if (remember) {
        localStorage.setItem('terraflow_user', JSON.stringify(mockUser));
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };
  const register = async (userData: any, role: 'supplier' | 'customer') => {
    setLoading(true);
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Mock registration (in a real app, this would be an API call)
      const newUser = {
        id: `${role}-${Date.now()}`,
        name: userData.fullName,
        email: userData.email,
        role: role as UserRole
      };
      setUser(newUser);
      localStorage.setItem('terraflow_user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('terraflow_user');
  };
  return <AuthContext.Provider value={{
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};