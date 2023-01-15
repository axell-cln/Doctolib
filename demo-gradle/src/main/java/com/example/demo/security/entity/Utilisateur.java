package com.example.demo.security.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name = "UTILISATEUR")
public class Utilisateur {
    @Id
    @GeneratedValue
    private Long id;
    
    private String login;
    
    private String password;
    
    private String email;
    
    public Long getId() {
        return id;
    }   
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    

    public void setId(final Long id) {
        this.id = id;
    }
    
    public String getLogin() {
        return login;
    }
    
    public void setLogin(final String login) {
        this.login = login;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(final String password) {
        this.password = password;
    }
    
}
