import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from "./Card";
import ServicesArr from "./ServicesArr";
export default function Services() {
  return (
    <>
      <section className="py-5 my-md-5">
        <div className="container">
         <h1 className="text-center mb-5">Our Services</h1>
          <div className="row gy-3"> 
               {ServicesArr.map((item, index) =>{
                  return  <Card key={index} name={item.name} id={item.id}  />
               })  
               }   
          </div>
        </div>
      </section>
    </>
  );
}
