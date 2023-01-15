package com.example.demo.appli.entity;


import io.github.bucket4j.*;

import org.springframework.http.HttpStatus;

import java.sql.Date;
import java.time.Duration;
//import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicAppointmentRestControler {
    
    @Autowired
    private AppointmentRepository appointmentRepository;  
    public PublicAppointmentRestControler(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path = "/api/public/rendezvous/")
    public ResponseEntity<String> controllerMethod( @RequestParam String date, @RequestParam String prenom, @RequestParam String center, @RequestParam String datenaissance , @RequestParam String nom  ) {

     /*   // System.out.println("customQuery = profesion " + customQuery.containsKey("profesion"));
        System.out.println("customQuery = mail " + customQuery.containsKey("email"));
        System.out.println("customQuery = passwrd " + customQuery.containsKey("password"));
        System.out.println("customQuery = pseudo " + customQuery.containsKey("login"));
 */
        /* VaccinationCenter vacc=new VaccinationCenter(); */
        /* Appointment appointment = new Appointment();
        appointment.setPrenom(prenom);
        appointment.setNom(nom);
        appointment.setDate(date);
        appointment.setDatenaissance(datenaissance);
       // appointment.setCenter(center);
        //appointment.setCenter(center);
        appointmentRepository.save(appointment);  */

        return new ResponseEntity<>(HttpStatus.OK);
   
        
    }
}
