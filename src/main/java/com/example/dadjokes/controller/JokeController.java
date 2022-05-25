package com.example.dadjokes.controller;

import com.example.dadjokes.model.Joke;
import com.example.dadjokes.service.JokeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping(path = "/api/jokes/", produces = "application/json")
public class JokeController {

    private static final Logger logger = LoggerFactory.getLogger(JokeController.class);

    @Autowired
    private JokeService jokeService;

    @GetMapping()
    public ResponseEntity<List<Joke>> listAllJokes() {
        List<Joke> jokes = jokeService.loadAllJokes();
        if (jokes.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(jokes);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Joke> getJokeById(@PathVariable long id) {
        Optional<Joke> joke = jokeService.findById(id);
        if (joke.isPresent()) {
            return ResponseEntity.ok(joke.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/top/{n}")
    public ResponseEntity<List<Joke>> findTopNByPopularity(@PathVariable int n) {
        List<Joke> topNByPopularity = jokeService.findTopNByPopularity(n);
        if (topNByPopularity.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(topNByPopularity);
        }
    }

    @GetMapping("/bottom/{n}")
    public ResponseEntity<List<Joke>> findBottomNByPopularity(@PathVariable int n) {
        List<Joke> bottomNByPopularity = jokeService.findBottomNByPopularity(n);
        if (bottomNByPopularity.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(bottomNByPopularity);
        }
    }

    @GetMapping("/active/{count}")
    public ResponseEntity<List<Joke>> findTopNMostInteractedJokes(@PathVariable(name = "count") Integer count) {
        System.out.println(count);
        List<Joke> jokesList = jokeService.loadAllJokes();
        jokesList.sort((o1, o2) -> o1.getInteractionCount() > o2.getInteractionCount() ? -1 : 1);
        if (jokesList.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
             return ResponseEntity.ok(jokesList.subList(0, jokesList.size() > count ? count : jokesList.size()));
        }
    }

    @GetMapping("/random")
    public ResponseEntity<Joke> getRandomJoke() {
        Long count = jokeService.getNumberOfJokes();
        // Doing this to Skip 0 as arandom Id
        long randomId = new Random().nextInt(count.intValue() - 1) + 1;
        logger.info("Getting RandomJoke for Id: {}", randomId);
        return getJokeById(randomId);
    }
}
