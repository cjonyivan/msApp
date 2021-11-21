const InputTreeSource = ({ updateText = {} }) => {
  let fileReader = null;

  const handleFileRead = (e) => {
    if (fileReader && fileReader.result) {
      updateText(fileReader.result);
    }
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          accept=".json"
          onChange={(e) => handleFileChosen(e.target.files[0])}
        />
        <label className="input-group-text">Fetch</label>
      </div>
    </>
  );
};

export default InputTreeSource;
