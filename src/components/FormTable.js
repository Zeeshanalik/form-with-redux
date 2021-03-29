import React from 'react';
import { connect } from 'react-redux';
import { setId } from '../redux/actions/id';
import { setName } from '../redux/actions/name';
import { setFatherName } from '../redux/actions/fatherName';
import { setAge } from '../redux/actions/age';
import { setAddress } from '../redux/actions/address';
import { setData } from '../redux/actions/data';
import { setEditButton } from '../redux/actions/editbutton';

const FormTable = ({
  data,
  setId,
  setName,
  setFatherName,
  setAge,
  setAddress,
  setEditButton,
}) => {
  const handleEdit = (detId) => {
    setEditButton(true);
    const tempObj = data.filter((value) => detId === value.id)[0];
    setId(detId);
    const { name, fatherName, id, age, address } = tempObj;
    setName(name);
    setFatherName(fatherName);
    setAge(age);
    setAddress(address);
  };
  return (
    <>
      <div>
        <table border='1'>
          <thead>
            <tr>
              <th>ID |</th>
              <th>Full Name |</th>
              <th> Father's Name |</th>
              <th> Age |</th>
              <th> Address </th>
              <th> Edit Details </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, fatherName, age, address }) => (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{fatherName}</td>
                <td>{age}</td>
                <td>{address}</td>
                <td>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
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
})(FormTable);
