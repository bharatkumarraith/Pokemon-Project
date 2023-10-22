package com.example.Backendpokemon.Domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Pokemon {
    @Id
    private String id;
    private String name;
    private String type;
    private String height;
    private String health;
    private String power;
}
