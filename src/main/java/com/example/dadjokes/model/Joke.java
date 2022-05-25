package com.example.dadjokes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Joke {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String subject;

    @Column
    private String text;

   @Column
   private long upVotes;

   @Column
   private long downVotes;

   private long interactionCount;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getText() {
        return text;
    }

    public void setText(String jokeText) {
        this.text = jokeText;
    }

    public long getUpVotes() {
        return upVotes;
    }

    public void setUpVotes(long upVotes) {
        this.upVotes = upVotes;
    }

    public long getDownVotes() {
        return downVotes;
    }

    public void setDownVotes(long downVotes) {
        this.downVotes = downVotes;
    }

    public long getInteractionCount() {
        this.interactionCount =  upVotes + downVotes;
        return this.interactionCount;
    }

    public void setInteractionCount(long interactionCount) {
        this.interactionCount = interactionCount;
    }
}
