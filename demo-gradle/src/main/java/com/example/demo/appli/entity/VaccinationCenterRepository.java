package com.example.demo.appli.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface VaccinationCenterRepository extends JpaRepository<VaccinationCenter,Integer> {

    @Query("SELECT id FROM VaccinationCenter u WHERE u.id=1")
    public List<VaccinationCenter> trouverParVille(String city);

  //  @Query("FROM VaccinationCenter SELECT *")
    //public List<VaccinationCenter> monFind(@Param("city") String city);
}

