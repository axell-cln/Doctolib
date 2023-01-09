import { VaccinationCenter } from "./vaccination-center/vaccination-center";

export const CENTERS:VaccinationCenter[]= [
    {id:1,name:"Hopital central",address: "Rue central",postalCode:"54000",city:"Nancy",openingDate: new Date(2020,4)},
    {id:2,name:"Hopital de la main", address: "Ailleurs dans Nancy",postalCode:"54000",city:"Nancy",openingDate:new Date(2021,4)},
    {id:3,name:"Hopital de la main2", address: "Quelque part dans Nancy",postalCode:"54000",city:"Nancy",openingDate:new Date(2022,4)},
    {id:4,name:"Hopital du pied", address: "Avenue des Vosges",postalCode:"88200",city:"Remiremont",openingDate:new Date(2020,1,15)},
    {id:5,name:"CHRU", address: "Plateau de Brabois",postalCode:"54500",city:"Brabois",openingDate:new Date(2010,1,18)}
    ];