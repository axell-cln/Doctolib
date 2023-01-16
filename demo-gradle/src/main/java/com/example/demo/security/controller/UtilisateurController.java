
package com.example.demo.security.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.demo.security.entity.Utilisateur;
import com.example.demo.security.repository.UtilisateurRepository;



@RestController
@RequestMapping(value = "/api/public/users",method=RequestMethod.POST)
public class UtilisateurController {


    @Autowired
    private UtilisateurRepository utilisateurRepository;
    
    @Autowired
    PasswordEncoder passwordEncoder;
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<String> controllerMethod(@RequestParam String login, @RequestParam String email, @RequestParam String password ) {

     /*   // System.out.println("customQuery = profesion " + customQuery.containsKey("profesion"));
        System.out.println("customQuery = mail " + customQuery.containsKey("email"));
        System.out.println("customQuery = passwrd " + customQuery.containsKey("password"));
        System.out.println("customQuery = pseudo " + customQuery.containsKey("login"));
 */
        
        Utilisateur newUtiliateur = new Utilisateur();
        newUtiliateur.setEmail(email);
        newUtiliateur.setLogin(login);
        newUtiliateur.setPassword(passwordEncoder.encode(password));
        utilisateurRepository.save(newUtiliateur);

        return new ResponseEntity<>(HttpStatus.OK);
   
        
    }
}
