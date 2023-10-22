package com.example.Backendpokemon;

import com.example.Backendpokemon.Domain.Pokemon;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Repository extends MongoRepository<Pokemon,String> {
}
