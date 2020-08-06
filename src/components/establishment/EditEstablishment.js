import React, {useState} from 'react';
import { useParams } from "react-router-dom";

import userApi from "../../apis/users"


const EditEstablishment = () => {
    const {id} = useParams()

    const [profile, setProfile] = useState({
        username: "",
        password: "",
        establishment: {
          companyName: "",
          category: "",
          cuisine: [], 
          phone: "",
          email: "",
          address: {
            street: "",
            number: 0,
            complement: "",
            neighborhood: "",
            city: ""
          },
          paymentForms: [], 
          offers: [],
          delivery: true,
          takeaway: true,
          takeawayTime: {
            startTime: "", 
            endTime: ""
          },
          sales: []
        }
      });

      function handleChange(event){
        
        setOffer({...profile,[event.currentTarget.name]: event.currentTarget.value})

      }

      useEffect(() => {
        (async function fetchUser() {
          try {
            const result = await userApi.get(`/establishment/profile/${id}`);
    
            setProfile({ ...result.data[0] });
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);

      async function handleSubmit(event) {
        event.preventDefault();
        
        try {
          const result = await userApi.put(`/establishment/profile/update/${id}`, profile);
          console.log(result)
          history.push(`/establishment/profile/${id}`);
          history.go();
        } catch (err) {
          console.error(err);
        }
      }


    return ( 
        <div><h1>Editar Oferta</h1>
    <hr className = "form-group"></hr>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nomePrato">Nome do Prato (title)</label>
        <input
          type="text"
          className="form-control form-control-lg col-5"
          id="offerTitleField"
          name="title"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={offer.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="valorPrato">Valor do prato (Value)</label>
        <input
          className="form-control form-control-lg col-5"
          name="value"
          id="offerValueField"
          onChange={handleChange}
          value={offer.value}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fotoPrato">Foto do Prato (photo)</label>
        <input
          type="text"
          className="form-control form-control-lg col-5"
          id="offerPhotoField"
          name="photo"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={offer.photo}
        />
      </div>
      <div className="form-group">
      <label htmlFor="quantidadeDisp">Quantidade Disponível</label>
        <input
          className="form-control form-control-lg col-5"
          name="availableQty"
          id="offerValueField"
          onChange={handleChange}
          value={offer.availableQty}
        />
        </div>
        <div>
          <input type="date" />
        </div>
      <button type="submit" className="btn btn-lg btn-primary">
        Save Edit
      </button>
    </form>
    </div>
     );
}
 

export default EditEstablishment;
