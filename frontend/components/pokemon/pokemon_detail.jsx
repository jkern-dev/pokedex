import React from 'react';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    const { pokemon, items } = this.props;

    if (!pokemon) return null;

    return (
    <section className="pokemon-detail">
      <figure>
        <img src={pokemon.image_url} alt={pokemon.name} />
      </figure>
      <ul>
        <li><h2>{pokemon.name}</h2></li>
        <li>Type: {pokemon.poke_type}</li>
        <li>Attack: {pokemon.attack}</li>
        <li>Defense: {pokemon.defense}</li>
        <li>Moves: {pokemon.moves.join(', ')}</li>
      </ul>
      <section className="toys">
        <h3>Items</h3>
        <ul className="toy-list">
        </ul>
      </section>
    </section>
    );
  }
}

export default PokemonDetail;