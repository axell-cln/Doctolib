package com.example.demo.security.controller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.appli.entity.Patient;


public interface PatientRepository extends JpaRepository<Patient, Long> {
    
    // @Query("SELECT p.id_patient FROM Patient p WHERE p.prenom = :prenom AND p.nom = :nom AND p.birth_date = :birth_date")
    // public Integer findIdByNameAndDateOfBirth(@Param("prenom") String firstName, @Param("nom") String lastName, @Param("birth_date") String dateOfBirth);

    
}



