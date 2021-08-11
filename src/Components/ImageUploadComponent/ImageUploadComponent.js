import { DropzoneArea } from "material-ui-dropzone";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { storage } from "../../firebase/index";
import "./ImageUploadComponent.css";

const ImageUploadComponent = ({ setImageList }) => {
  const [state, setState] = useState({
    image: null,
    url: "",
    progress: 0,
  });
  const [key, setKey] = useState(0);
  const [debounceKey] = useDebounce(key, 1000);

  const handleChange = (e) => {
    const image = e[0];
    if (image) {
      setState(() => ({ image }));
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setState({ progress });
        },
        (error) => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ....
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setState({ url, image: null });
              setImageList((List) => [...List, url]);
              setKey((key) => key + 1);
            });
        }
      );
    }
  };

  return (
    <div className="image-input-container">
      <DropzoneArea
        height="50%"
        key={debounceKey}
        acceptedFiles={["image/*"]}
        dropzoneText={"Drag and drop an image here or click"}
        onChange={handleChange}
        filesLimit={1}
        showFileNamesInPreview={true}
      />
      <br />
      {state.image !== null ? (
        <>
          <progress value={state.progress} max={100} />
          <h6>uploading...</h6>
        </>
      ) : (
        <>
          <h3>{""}</h3>
        </>
      )}
    </div>
  );
};

export default ImageUploadComponent;
