const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const listaPokemonAtivo = document.querySelector('.ativo')
        listaPokemonAtivo.classList.remove('ativo')
        const listaPokemonParaAbrir = document.getElementById(idPokemonSelecionado)
        listaPokemonParaAbrir.classList.add('ativo')
    })
})