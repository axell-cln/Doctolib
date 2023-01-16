package com.example.demo.appli.entity;


import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Appointment {
    @Id
    private Integer id_appointment;
    private String date;
    private Integer id_patient;
    private Integer id_doctor;
    
    @ManyToOne(optional = true)
    @JoinColumn(name = "id_vaccination_center", nullable = false, foreignKey = @ForeignKey(name = "adresse_fk"))
    private VaccinationCenter center;

    public Integer getId_patient() {
        return id_patient;
    }

    public void setId_patient(Integer id_patient) {
        this.id_patient = id_patient;
    }

    public Integer getId_doctor() {
        return id_doctor;
    }

    public void setId_doctor(Integer id_doctor) {
        this.id_doctor = id_doctor;
    }

 
    public VaccinationCenter getCenter() {
        return center;
    }

    public void setCenter(VaccinationCenter center) {
        this.center = center;
    }

    public Appointment() {
    }

    public Appointment(Integer id_appointment, String date, Integer idPersonne, Integer idDoc, VaccinationCenter center) {
        this.id_appointment = id_appointment;
        this.id_doctor = idDoc;
        this.id_patient = idPersonne;
        this.date = date;
        this.center = center;
        
    }

    public Integer getId_appointment() {
        return id_appointment;
    }

    public void setId_appointment(Integer id_appointment) {
        this.id_appointment = id_appointment;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    // public VaccinationCenter getCenter() {
    //     return center;
    // }

    // public void setCenter(VaccinationCenter center) {
    //     this.center = center;
    // } 

    
}
