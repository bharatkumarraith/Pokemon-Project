package com.example.Backendpokemon;

import com.example.Backendpokemon.Domain.Pokemon;
import com.example.Backendpokemon.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Controller {

    @Autowired
    private Service service;






    @PostMapping("/addPokemons")
    public List<Pokemon> addPokemons(@RequestBody List<Pokemon> pokemons) {
        return service.addPokemons(pokemons);
    }

    @GetMapping("/getAll")

    public ResponseEntity<?>  getAllPokemons()
    {
        return new ResponseEntity<>(service.allPokemons(),HttpStatus.OK);
    }


    @DeleteMapping("/Delete-Pokemon-By-Id/{id}")
    public ResponseEntity<?>DeleteTrackById(@PathVariable String id)
    {

            return new ResponseEntity<>(service.DeleteByTrackId(id),HttpStatus.OK);

    }

    @PutMapping("/UpdatePokemon")
    public ResponseEntity<?> updateTrack(@RequestBody Pokemon pokemon)
    {

            return new ResponseEntity<>(service.UpdateTrack(pokemon), HttpStatus.OK);

    }

}
