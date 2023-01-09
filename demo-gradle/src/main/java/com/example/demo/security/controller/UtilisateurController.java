
package com.example.demo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.security.entity.Utilisateur;
import com.example.demo.security.repository.UtilisateurRepository;



@RestController
@RequestMapping("/api/public/users")
public class UtilisateurController {


    @Autowired
    private UtilisateurRepository utilisateurRepository;
    
    @GetMapping()
    public List<Utilisateur> patients() {
        return utilisateurRepository.findAll();
    }

    // @PostMapping()
    // public void newPatient(@RequestBody Integer id,@RequestBody String birthDate, @RequestBody String nom, @RequestBody String prenom) {
    //     patientRepository.addPatient(birthDate, nom, prenom);
    // }


    @PostMapping()
    public void addUser(Utilisateur newUser) {
        utilisateurRepository.save(newUser);
    }
}
