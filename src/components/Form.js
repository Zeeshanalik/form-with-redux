import React from 'react';
import { connect } from 'react-redux';
import {
  setId,
  setName,
  setFatherName,
  setAge,
  setAddress,
  setData,
  setEditButton,
} from '../redux/actions/index';

const Form = ({
  id,
  name,
  age,
  address,
  fatherName,
  data,
  editButton,
  setId,
  setName,
  setFatherName,
  setAge,
  setAddress,
  setData,
  setEditButton,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const tempObj = {
      id,
      name,
      fatherName,
      address,
      age,
    };

    // ------------------------------- Check for details --------------------------------------------------------

    if (!name || !id || !fatherName || !address || age <= 0) {
      alert('Error! Please Enter Your Details Correctly');
    } else setData([...data, tempObj]);

    //----------------------------------Check For Edit Button---------------------------------------------------

    if (editButton) {
      let newArr = [...data];
      const updatedArray = newArr?.map((value) => {
        if (value?.id === id) {
          return {
            id,
            name,
            fatherName,
            age,
            address,
          };
        } else return value;
      });
      setData(updatedArray);
      setEditButton(false);
    }
    // ---------------------------------Setting Values to Null---------------------------------------------------
    setId('');
    setName('');
    setFatherName('');
    setAge('');
    setAddress('');
  };

  return (
    <div>
      <label>Please Enter Your ID</label>
      <input type='number' value={id} onChange={(e) => setId(e.target.value)} />
      <hr />
      <label>Please Enter Your Name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr />
      <label>Please Enter Your Father's Name</label>
      <input
        type='text'
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
      />
      <hr />
      <label>Please Enter Your Age</label>
      <input
        type='number'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <hr />
      <label>Please Enter Your Address</label>
      <input
        type='text'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <hr />
      <button onClick={handleClick}> Submit</button>
    </div>
  );
};
const mapStateToProps = ({
  id,
  name,
  age,
  address,
  fatherName,
  data,
  editButton,
}) => {
  return {
    id,
    name,
    age,
    address,
    fatherName,
    data,
    editButton,
  };
};
export default connect(mapStateToProps, {
  setId,
  setName,
  setFatherName,
  setAge,
  setAddress,
  setData,
  setEditButton,
})(Form);
