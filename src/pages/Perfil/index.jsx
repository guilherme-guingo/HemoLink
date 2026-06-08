import { useFavoritos } from "../../contexts/FavoritesContext";

export const Perfil = () => {
    const { favoritos } = useFavoritos();
    
    return (
        <main>
            <h1>Perfil do Doador</h1>

            {favoritos.length === 0 ? (
                <p>voce ainda nao favoritou nenhum hospital.</p>
            ) : ( 
                favoritos.map((hospital) => (
                    <div key={hospital.id}>
                        <h3>{hospital.nome}</h3>
                        <p>📍 {hospital.endereco}</p>
                        <p>Necessita: {hospital.sangueNecessario}</p>
                    </div>
                ))
            )}
        </main>
    );
};