// import React from 'react'

const UploadForm = () => {
  return (
    <div>
      <form className="flex items-center flex-col gap-8">
        <input
          type="file"
          id="fileInput"
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button className="btn gap-3">Upload🚀</button>
      </form>
    </div>
  );
};

export default UploadForm;
