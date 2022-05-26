package com.example.dadjokes.repository;

import com.example.dadjokes.model.Joke;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JokeRepository extends JpaRepository<Joke, Long> {

    @Query("SELECT j FROM Joke j WHERE j.text LIKE %:filter% or j.subject LIKE %:filter%")
    List<Joke> findAllByFuzzyMatch(@Param("filter") String filter);
}
