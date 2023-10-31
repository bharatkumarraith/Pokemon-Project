package com.example.Backendpokemon.service;

import com.example.Backendpokemon.Domain.Pokemon;
import com.example.Backendpokemon.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class Serviceimpl implements Service{

    @Autowired
    private Repository repository;




@Override
    public List<Pokemon> addPokemons(List<Pokemon> pokemons) {
        // Save all the Pokémon objects in the list to the database
        return repository.saveAll(pokemons);
    }

    @Override
    public List<Pokemon> allPokemons() {
        return repository.findAll();
    }

    @Override
    public boolean DeleteByTrackId(String id) {
        if(repository.findById(id).isPresent())
        {
            repository.deleteById(id);
            return true;
        }

        else{
           return false;
        }
    }



    @Override
    public Pokemon UpdateTrack(Pokemon pokemon) {
        if(repository.findById(pokemon.getId()).isPresent()) {
            return repository.save(pokemon);
        }
       else{
           return null;
        }
    }
    }

