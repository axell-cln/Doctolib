package com.example.demo.appli.entity;


// import io.github.bucket4j.*;

import org.springframework.http.HttpStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/public/rendezvous")
public class PublicAppointmentRestControler {
    
    @Autowired
    private AppointmentRepository appointmentRepository;  
    public PublicAppointmentRestControler(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<String> controllerMethod( @RequestParam String date, @RequestParam Integer idDoc , @RequestParam Integer idPatient, @RequestBody VaccinationCenter center) {

   
         Appointment appointment = new Appointment();
       
        appointment.setDate(date);
        // appointment.setId_appointment(IdCenter);
        appointment.setId_patient(idPatient);
        appointment.setId_doctor(idDoc);
        appointment.setCenter(center);
        appointmentRepository.save(appointment);  

        return new ResponseEntity<>(HttpStatus.OK);
   
        
    }
}
