import React, {useRef} from 'react';

const Form = ({income, setIncome}) => {
  const desc = useRef(null);
  const price=useRef(null);
  const date= useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(desc.current.value)
    // let d = date.current.value.split("_");
    // let newD= new Date(d[0], d[1], d[2]);
    setIncome([...income, {
      "desc": desc.current.value,
      "price": price.current.value,
      "date": date.current.value
    }]);
    desc.current.value = ""
    price.current.value= null;
    date.current.value=null;
  };

  return (
    <form className='income-form' onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', flexWrap:'wrap'}}>
      <div className="form-inner">
        <input  style={{height:'80%', borderRadius:'5px', margin:'5px'}} type="text" name="desc" id="desc" placeholder="Income Description..." ref={desc} />
        <input style={{height:'80%', borderRadius:'5px', margin:'5px'}} type="number" name="price" id="price" placeholder="Price.." ref={price} />
        <input  style={{height:'80%', borderRadius:'5px', margin:'5px'}} type="date" name="date" id="date" placeholder="income date..." ref={date} />
        <input type="submit" value="Add Income"  style={{height:'100%', borderRadius:'5px', margin:'5px', backgroundColor:'crimson', color:"white"}} />
      </div>
    </form>
  )
}

export default Form;
