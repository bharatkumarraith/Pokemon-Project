package com.example.Backendpokemon;

import com.example.Backendpokemon.Domain.Pokemon;
import com.example.Backendpokemon.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Controller {

    @Autowired
    private Service service;


    @PostMapping("/addPokemon")

    public ResponseEntity<?> addPokemon(@RequestBody Pokemon pokemon)
    {
       return new ResponseEntity<>(service.addPokemon(pokemon), HttpStatus.OK);
    }
}
