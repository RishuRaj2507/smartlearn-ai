export const getToken = () => {
    if (typeof window === "undefined") return null;
  
    return localStorage.getItem("token");
  };
  
  export const getUser = () => {
    if (typeof window === "undefined") return null;
  
    const user = localStorage.getItem("user");
  
    return user ? JSON.parse(user) : null;
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  
    window.location.href = "/";
  };
  
  export const isAuthenticated = () => {
    const token = getToken();
  
    return !!token;
  };