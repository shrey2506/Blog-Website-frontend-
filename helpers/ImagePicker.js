import './ImagePicker.css';

const ImagePicker=props=>{
   return(
       <div className="card">
            <input 
                id={props.id}
                style={{ display: 'none'}}
                type="file"
                accept=".jpg,.png,.jpeg"
                 />
       </div>
   );
};

export default ImagePicker;