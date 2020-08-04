import React from "react";

const FormOffer = (props) => {
  function handleChange(event) {
    props.setOffer({
      ...props.offer,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(props.offer);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div> */}

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="offerTitleField"
          name="title"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={props.offer.title}
        />
      </div>
      {/* <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <textarea
          className="form-control form-control-lg"
          name="description"
          id="taskDescriptionField"
          onChange={handleChange}
          value={props.offer.description}
        />
      </div> */}
      <button type="submit" className="btn btn-lg btn-primary">
        Save
      </button>
    </form>
  );
};

export default FormOffer;
