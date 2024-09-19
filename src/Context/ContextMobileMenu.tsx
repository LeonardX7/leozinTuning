import { createContext, useContext, useState, ReactNode } from "react";

interface MobileMenuContextProps {
    showMobileMenu: boolean;
    setShowMobileMenu: (value: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextProps | undefined>(undefined);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <MobileMenuContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
            {children}
        </MobileMenuContext.Provider>
    );
};

export const useMobileMenu = () => {
    const context = useContext(MobileMenuContext);
    if (!context) {
        throw new Error("useMobileMenu deve ser usado dentro de um MobileMenuProvider");
    }
    return context;
};
