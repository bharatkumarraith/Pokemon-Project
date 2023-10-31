package com.example.Backendpokemon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackendPokemonApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendPokemonApplication.class, args);
	}
	@Configuration
	public class CorsConfig {

		@Bean
		public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**")
							.allowedOrigins("http://localhost:4200") // Replace with your Angular frontend URL
							.allowedMethods("GET", "POST", "PUT", "DELETE")
							.allowedHeaders("*")
							.allowCredentials(true);
				}
			};
		}
	}
}
