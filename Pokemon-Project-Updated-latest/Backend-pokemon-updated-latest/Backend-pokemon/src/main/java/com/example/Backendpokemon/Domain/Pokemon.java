package com.example.Backendpokemon.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Pokemon {
    @Id
    private String id;
    private String name;
    private String height;
    private String order;
    private String base_experience;
    private sprites sprites;



}
