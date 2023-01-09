package com.example.demo.security.controller;
import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.appli.entity.Patient;


public interface PatientRepository extends JpaRepository<Patient, Long> {


}



