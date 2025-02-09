import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

import "../App.css";

//cca3 = country code



const CountryDetail = props => {
 const getCountry = cca3 => {
   const theCountry = oneCountry => {
     return oneCountry.cca3 === cca3;
   };
   return countries.find(theCountry);
 };

 //https://scotch.io/courses/using-react-router-4/route-params
 const foundCountry = getCountry(props.match.params.cca3);



 return (
   <div className="col-7">
     <h1>{foundCountry.name.common}</h1>
     <table className="table">
       <thead />
       <tbody>
         <tr>
           <td className="thirty">Capital</td>
           <td>{foundCountry.capital}</td>
         </tr>
         <tr>
           <td>Area</td>
           <td>
            {foundCountry.area} km
             <sup>2</sup>
           </td>
         </tr>
         <tr>
           <td>Borders</td>
           <td>
             <ul>
                 {
                foundCountry.borders.map((country, idx) => {
                    let pais = getCountry(country)
                    return <li key={idx}><Link to={`/countries/${pais.cca3}`}>{pais.name.common}</Link></li>
                })
                 }

             </ul>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
 );
};

export default CountryDetail;