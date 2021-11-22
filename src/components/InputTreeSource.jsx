import { isJson, parser } from "../Utils";
const InputTreeSource = ({ updateText = {}, updateTextValid = () =>{} }) => {
  let fileReader = null;

  const handleFileRead = (e) => {
    if (fileReader && fileReader.result) {
      // if it's a valid json
      const jsonValid = isJson(fileReader.result);
      if (jsonValid) {
        // Transforms from array to object
        const parse = parser(jsonValid);
        // set in the store
        updateText(parse);
        updateTextValid(parse);
      }else{
        alert('error');
      }
    }
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    // evento lo read the file content
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
