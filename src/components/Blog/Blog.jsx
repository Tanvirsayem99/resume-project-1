import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import { useState } from "react";
import AllBlogs from "./AllBlogs";



const Blog = () => {
  const handleDownload =() =>{
    const capture = document.querySelector('.my-items');
        html2canvas(capture).then((canvas)=>{
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('receipt.pdf')
        })
  }


  return (
    <div>
        <div className=" h-32 md:my-5 mt-10 md:absolute md:right-14 md:text-left text-center">
        <button onClick={handleDownload} className="h-10  btn btn-outline btn-secondary">download</button>
        </div>
      
        <div className="my-items md:my-10 w-11/12 mx-auto">
            <AllBlogs></AllBlogs>
        </div>
      
    </div>
  );
};

export default Blog;
