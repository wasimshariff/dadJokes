package com.example.dadjokes.service;

import com.example.dadjokes.model.Joke;
import com.example.dadjokes.repository.JokeRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@Service
public class JokesLoader {

    @Autowired
    private JokeRepository jokeRepository;

    @PostConstruct
    public void loadData() throws URISyntaxException, IOException {
        URL resource = JokesLoader.class.getClassLoader().getResource("dadjokes.json");
        byte[] bytes = Files.readAllBytes(Paths.get(resource.toURI()));
        String jsonString = new String(bytes);
        ObjectMapper mapper = new ObjectMapper();
        List<Joke> jokes = mapper.readValue(bytes, new TypeReference<List<Joke>>() {
        });
        jokeRepository.saveAll(jokes);

    }
}
