package com.example.Backendpokemon.service;

import com.example.Backendpokemon.Domain.Pokemon;
import com.example.Backendpokemon.Repository;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Serviceimpl implements Service{

    @Autowired
    private Repository repository;


    @Override
    public Pokemon addPokemon(Pokemon pokemon) {
        return repository.save(pokemon);
    }
}
