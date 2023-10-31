package com.example.Backendpokemon.service;

import com.example.Backendpokemon.Domain.Pokemon;

import java.util.List;

@org.springframework.stereotype.Service
public interface Service {



    public List<Pokemon> addPokemons(List<Pokemon> pokemons);

    List<Pokemon> allPokemons();

    boolean DeleteByTrackId(String id);
    Pokemon UpdateTrack(Pokemon pokemon) ;
}
