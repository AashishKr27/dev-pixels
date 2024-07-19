// import React from 'react'

import ImageGallery from "../componenets/ImageGallery";
import Navbar from "../componenets/Navbar";
import UploadForm from "../componenets/UploadForm";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  );
};

export default Home;
