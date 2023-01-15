package com.example.demo.appli.entity;

import java.sql.Date;
import java.time.LocalDateTime;
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
    private String prenom;
    private String nom;
    private String datenaissance;
/*     private String centerString; */
    @ManyToOne(optional = true)
    @JoinColumn(name = "id_vaccination_center", nullable = false, foreignKey = @ForeignKey(name = "adresse_fk"))
    private VaccinationCenter center;
 
    public Appointment() {
    }

    public Appointment(Integer id_appointment, String date, String center, String prenom, String nom, String datenaissance) {
        this.id_appointment = id_appointment;
        this.prenom=prenom;
        this.nom=nom;
        this.datenaissance=datenaissance;
        this.date = date;
        /* this.centerString = center; */
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

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDatenaissance() {
        return datenaissance;
    }

    public void setDatenaissance(String datenaissance) {
        this.datenaissance = datenaissance;
    }

   /*  public String getCenterString() {
        return centerString;
    }

    public void setCenter(String center) {
        this.centerString = center;
    } */

    public VaccinationCenter getCenter() {
        return center;
    }

    public void setCenter(VaccinationCenter center) {
        this.center = center;
    } 

    
}
