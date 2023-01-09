package com.example.demo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.appli.entity.Doctor;



@RestController
@RequestMapping("/api/public/doctor")
public class DoctorController {


    @Autowired
    private DoctorRepository doctorRepository;
    
    @GetMapping()
    public List<Doctor> doctors() {
        return doctorRepository.findAll();
    }

}
