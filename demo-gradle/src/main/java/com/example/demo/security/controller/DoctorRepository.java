package com.example.demo.security.controller;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.appli.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {


}


