package com.example.dadjokes.service;

import com.example.dadjokes.model.Joke;
import com.example.dadjokes.repository.JokeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
public class JokeService {

    @Autowired
    private JokeRepository jokeRepository;

    public List<Joke> loadAllJokes() {
        return jokeRepository.findAll();
    }

    public List<Joke> loadAllJokes(String filter) {
        List<Joke> result = null;
        if (StringUtils.hasText(filter)) {
            result = jokeRepository.findAllByFuzzyMatch(filter);
        }
        if (CollectionUtils.isEmpty(result)) {
            result = loadAllJokes();
        }
        return result;
    }

    public Optional<Joke> findById(long id) {
        return jokeRepository.findById(id);
    }

    public List<Joke> findTopNByPopularity(int n) {
        Page<Joke> upVotes = jokeRepository.findAll(PageRequest.of(0, n, Sort.by(Sort.Order.desc("upVotes"))));
        return upVotes.getContent();
    }

    public List<Joke> findBottomNByPopularity(int n) {
        Page<Joke> downVotes = jokeRepository.findAll(PageRequest.of(0, n, Sort.by(Sort.Order.desc("downVotes"))));
        return downVotes.getContent();
    }

    public long getNumberOfJokes() {
        return jokeRepository.count();
    }

    public void updateJoke(Joke joke) {
        jokeRepository.save(joke);
    }

}
