import {useState} from "react";
import Select from "react-select";
import HashLoader from "react-spinners/HashLoader";
import SampleImg from "../Images/sampleImg.jpg";

const override = {
  display: "block",
  margin: "0 auto",
  marginTop: "10em",
  marginLeft:"-9em"
};
const GenerateImageArtToolSection = () => {
    const [showButtons, setShowButtons] = useState(false);

    const [imageInput, setImageInput] = useState([]);
    const [imageTextInput, setImageTextInput] = useState(null);
  
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#1c6373");
  
    const options = [
      { value: "3d-model", label: "3d-model" },
      { value: "analog-film", label: "analog-film" },
      { value: "anime", label: "anime" },
      { value: "cinematic", label: "cinematic" },
      { value: "comic-book", label: "comic-book" },
      { value: "digital-art", label: "digital-art" },
      { value: "enhance", label: "enhance" },
      { value: "fantasy-art", label: "fantasy-art" },
      { value: "isometric", label: "isometric" },
      { value: "line-art", label: "line-art" },
      { value: "low-poly", label: "low-poly" },
      { value: "modeling-compound", label: "modeling-compound" },
      { value: "neon-punk", label: "neon-punk" },
      { value: "origami", label: "origami" },
      { value: "photographic", label: "photographic" },
      { value: "pixel-art", label: "pixel-art" },
      { value: "tile-texture", label: "tile-texture" },
  
    ];
  
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleMouseEnter = () => {
      setShowButtons(true);
    };
  
    const handleMouseLeave = () => {
      setShowButtons(false);
    };
  
    const handleDelete = (index) => {
      setImageInput((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages.splice(index, 1);
        return updatedImages;
      });
    };
  
    const handleDownload = (image) => {
      const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${image}`;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };
  
    function generateImage() {
      setLoading(true);
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      fetch(`https://oo15wsy0ef.execute-api.us-east-1.amazonaws.com/v11/stabilityai?imageText=${imageTextInput}&style_preset=${selectedOption.value}`,requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setImageInput((prevImages) => [...prevImages, result.base_64_img_str]);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  
  return (
    <>
         <div className="scroll-view-component scrollbar-secondary-component">
<div className="content-wrapper">
<div className="container-xxl flex-grow-1">
    
    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light"></span> Gen Image</h4>

      <div className="container-fluid mb-5">
          <div className="d-flex justify-content-center">
            <div className="mt-2">
              {loading === true ? (
                <HashLoader
                  color={color}
                  loading={loading}
                  cssOverride={override}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : imageInput && imageInput.length > 0 ? (

                <div
                    className="card mb-5"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                      <img
                        src={`data:image/jpeg;base64,${imageInput[imageInput.length-1]}`}
                        className="img-fluid card-img-top"
                        alt="..."
                        style={{ height: "30em", borderRadius: "1em" }}
                      />

                      {showButtons && (
                        <div
                          className="overlay-buttons"
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <button
                            className="btn btn-sm btn-outline-danger mb-2"
                            onClick={() => handleDelete(imageInput.length-1)}
                          >
                            <i className="fa-solid fa-trash" />
                          </button>
                          <button
                            className="btn btn-sm btn-outline-info"
                            onClick={()=>handleDownload(imageInput.length-1)}
                          >
                            <i className="fa-solid fa-download" />
                          </button>
                        </div>
                      )}
                  </div>
             
              ) : (
                <img
                  src={SampleImg}
                  className="img-fluid card-img-top"
                  alt="..."
                  style={{ height: "30em", borderRadius: "1em" }}
                />
              )}
            </div>
            &nbsp;&nbsp;
              {
                loading === true ? null :
                <div className="w-25 mt-1">
                <Select
                // styles={{border:"1px solid #1c6373"}}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
      </div>
              }
       
          </div>

          <div className="search-bar-head mb-3">
            <div className="search-bar">
              <div>
                <i className="fa-solid fa-circle-plus" />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Ask to follow-up..."
                onChange={(e) => setImageTextInput(e.target.value)}
              />

              <p className="mt-2">{"Copilot"}</p>

              <button
                type="button"
                className="ms-2 me-2 arrow-btn"
                onClick={generateImage}
              >
                <i className="fa-solid fa-arrow-up" />
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default GenerateImageArtToolSection