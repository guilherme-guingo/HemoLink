import { useContext, createContext, useState, useEffect } from 'react';

export const ContextoFavoritos = createContext();

export const ProvedorFavoritos = ({ children }) => {
    const [favoritos, setFavoritos] = useState(() => {
        const salvos = localStorage.getItem('favoritos');
        return salvos ? JSON.parse(salvos) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);

    function favoritar(hospital) {
        const jaExiste = favoritos.some(item => item.id === hospital.id);
        if(jaExiste) {
            setFavoritos(favoritos.filter(item => item.id !== hospital.id));
            return;
        }
        setFavoritos([...favoritos, hospital]);
    }

    function isFavorito(id) {
        return favoritos.some(item => item.id === id);
    }

    return (
        <ContextoFavoritos.Provider value={{ favoritos, favoritar, isFavorito }}>
            {children}
        </ContextoFavoritos.Provider>
    );
}

export const useFavoritos = () => useContext(ContextoFavoritos);