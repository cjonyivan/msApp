import { isJson, parser } from "../Utils";
const InputTreeSource = ({ updateText = {}, updateTextValid = () =>{} }) => {
  let fileReader = null;

  const handleFileRead = (e) => {
    if (fileReader && fileReader.result) {
      const jsonValid = isJson(fileReader.result);
      if (jsonValid) {
        const parse = parser(jsonValid);
        updateText(parse);
        updateTextValid(parse);
      }else{
        alert('No es valido =P');
      }
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
