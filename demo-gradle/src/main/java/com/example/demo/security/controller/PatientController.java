package com.example.demo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.appli.entity.Patient;



@RestController
public class PatientController {


    @Autowired
    private PatientRepository patientRepository;


    @RequestMapping("/api/public/patient")
    @GetMapping()
    public List<Patient> patients() {
        return patientRepository.findAll();
    
    }
    @RequestMapping("/api/public/patientID")
    @GetMapping
    public Integer IdPatient(@RequestParam String nom, @RequestParam String prenom, @RequestParam String bDate ){
        //return patientRepository.findIdByNameAndDateOfBirth(prenom,nom, bDate);
        return 1;
     }


    // @PostMapping()
    // public void newPatient(@RequestBody Integer id,@RequestBody String birthDate, @RequestBody String nom, @RequestBody String prenom) {
    //     patientRepository.addPatient(birthDate, nom, prenom);
    // }


    @PostMapping()
    public void addPatient(Patient newPatient) {
        patientRepository.save(newPatient);
    }
}
