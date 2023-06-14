// Função de validação de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função de validação de data
function isValidDate(date) {
    if (typeof date !== 'string') {
        return false;
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        return false;
    }
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        return false;
    }
    return true;
}

// Função de validação de número de telefone
function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10,12}$/;
    return phoneRegex.test(phoneNumber);
}

const collectionCards = await getMongoCollection("carta")
const cardFounded = await collectionCards.findOne({_id: new ObjectId(req.params.idCard)})
const pokemonToBeTraded = pokemons.find(pokemon => pokemon.id === cardFounded.idPokemon)
               
res.status(200).json(generateListOfIdPokemonsByRarity(pokemons, pokemonToBeTraded.rarity))