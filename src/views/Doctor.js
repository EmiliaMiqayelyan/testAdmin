import React from 'react';
import "antd/dist/antd.css";
import { Table } from "antd";
import { Button } from "antd";
import { Modal } from "antd"
import { Input } from 'antd';
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function Doctor() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Test Test",
      surname: "test5 test5	",
      email: "test@gmail.com",
      phone: "+40699552123"
    },

    {
      id: 2,
      name: "lusine	",
      surname: "khachatryan",
      email: "lus@gmail.com	",
      phone: "+37499999999"
    },

    {
      id: 3,
      name: "Haykuhi",
      surname: "Newtest",
      email: "hakuml8718@gmail.com",
      phone: "+37487654327`"
    },

    {
      id: 4,
      name: "Nadejda",
      surname: "Sapojnic",
      email: "nadejda.sapojnic@test.com	",
      phone: "+40699883521"
    },
  ])
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },

    {
      key: '2',
      title: 'Name',
      dataIndex: 'name'
    },

    {
      key: '3',
      title: 'Surname',
      dataIndex: 'surname'
    },

    {
      key: '4',
      title: 'Email',
      dataIndex: 'email'
    },

    {
      key: '5',
      title: 'Phone',
      dataIndex: 'phone'
    },

    {
      key: '6',
      title: 'Actions',
      render: (record) => {
        return <>
          <EditOutlined onClick={() => {
            onEditDoctor(record);
          }} />
          <DeleteOutlined onClick={() => {
            onDeleteDoctor(record);
          }} style={{ color: "red", marginLeft: 12 }} />
        </>
      }
    }
  ];

  const onAddDoctor = () => {
    const randomNumber = parseInt(Math.random() * 1000)
    const newDoctor = {
      id: randomNumber,
      name: "Name",
      surname: "Surname",
      email:"@gmail.com",
      phone: "Phone"
    }
    setDataSource(pre => {
      return [...pre, newDoctor]
    })
  };

  const onDeleteDoctor = (record) => {
    setDataSource(pre => {
      return pre.filter(doctor => doctor.id !== record.id)
    })
  };

  const onEditDoctor = (record) => {
    setIsEditing(true);
    setEditingDoctor({ ...record })
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingDoctor(null);
  };

  return (
    <div className='doctors'>
      <header className="Doctor-header">
        <Button onClick={onAddDoctor}>Add</Button>
        <Table
          columns={columns}
          dataSource={dataSource}>
        </Table>
        <Modal
          title="Edit Doctor"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing()
          }}
          onOk={() => {
            setDataSource(pre => {
              return pre.map(doctor => {
                if (doctor.id === editingDoctor.id) {
                  return editingDoctor
                } else {
                  return doctor
                }
              })
            })
            resetEditing()
          }}>
          <Input value={editingDoctor?.name} onChange={(e) => {
            setEditingDoctor(pre => {
              return { ...pre, name: e.target.value }
            })
          }} />
          <Input value={editingDoctor?.surname} onChange={(e) => {
            setEditingDoctor(pre => {
              return { ...pre, surname: e.target.value }
            })
          }} />
          <Input value={editingDoctor?.email} onChange={(e) => {
            setEditingDoctor(pre => {
              return { ...pre, email: e.target.value }
            })
          }} />
          <Input value={editingDoctor?.phone} onChange={(e) => {
            setEditingDoctor(pre => {
              return { ...pre, phone: e.target.value }
            })
          }} />

        </Modal>

      </header>
    </div>
  );
}

export default Doctor;