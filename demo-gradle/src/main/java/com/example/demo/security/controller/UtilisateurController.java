
package com.example.demo.security.controller;

import java.util.List;
import java.util.Map;
import java.util.Observable;
import java.util.Observer;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.appli.entity.Patient;
import com.example.demo.security.entity.Utilisateur;
import com.example.demo.security.repository.UtilisateurRepository;



@RestController
@RequestMapping(value = "/api/public/users")
public class UtilisateurController {


    @Autowired
    private UtilisateurRepository utilisateurRepository;
    
   
    @GetMapping
    public ResponseEntity<String> controllerMethod(@RequestParam Map<String, String> customQuery) {

        System.out.println("customQuery = profesion " + customQuery.containsKey("profesion"));
        System.out.println("customQuery = mail " + customQuery.containsKey("mail"));
        System.out.println("customQuery = passwrd " + customQuery.containsKey("passwrd"));
        System.out.println("customQuery = pseudo " + customQuery.containsKey("pseudo"));

        
        Utilisateur newUtiliateur = new Utilisateur();
        newUtiliateur.setEmail("merlin@");
        newUtiliateur.setLogin("MErlin");
        newUtiliateur.setPassword("124");

        utilisateurRepository.save(newUtiliateur);

        return new ResponseEntity<>("Hello World!", HttpStatus.OK);
   
        
    }
}
