import React from 'react';

const Section=({children, title})=>{
  return (
    <section style={{margin: "0 auto"}}>
      <h2 className="section-title" style={{textAlign: "center"}}>{title}</h2>
      {children}
    </section>
  )
};

export default Section;