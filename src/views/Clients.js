import React from 'react';
import "antd/dist/antd.css";
import { Table } from "antd";
import { Button } from "antd";
import { Modal } from "antd"
import { Input } from 'antd';
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function Client() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "doc doc",
      surname: "docsss	",
      email: "doc@mail.ru",
      phone: "+37414785236	"
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
      name: "Marked Tven",
      surname: "Newtest",
      email: "hakuml8718@gmail.com",
      phone: "+37493232323"
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
            onEditClient(record);
          }} />
          <DeleteOutlined onClick={() => {
            onDeleteClient(record);
          }} style={{ color: "red", marginLeft: 12 }} />
        </>
      }
    }
  ];

  const onAddClient = () => {
    const randomNumber = parseInt(Math.random() * 1000)
    const newClient = {
      id: randomNumber,
      name: "Name",
      surname: "Surname",
      email:"@gmail.com",
      phone: "Phone"
    }
    setDataSource(pre => {
      return [...pre, newClient]
    })
  };

  const onDeleteClient = (record) => {
    setDataSource(pre => {
      return pre.filter(client => client.id !== record.id)
    })
  };

  const onEditClient = (record) => {
    setIsEditing(true);
    setEditingClient({ ...record })
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingClient(null);
  };

  return (
    <div className='Clients'>
      <header className="Client-header">
        <Button onClick={onAddClient}>Add</Button>
        <Table
          columns={columns}
          dataSource={dataSource}>
        </Table>
        <Modal
          title="Edit Client"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing()
          }}
          onOk={() => {
            setDataSource(pre => {
              return pre.map(client => {
                if (client.id === editingClient.id) {
                  return editingClient
                } else {
                  return client
                }
              })
            })
            resetEditing()
          }}>
          <Input value={editingClient?.name} onChange={(e) => {
            setEditingClient(pre => {
              return { ...pre, name: e.target.value }
            })
          }} />
          <Input value={editingClient?.surname} onChange={(e) => {
            setEditingClient(pre => {
              return { ...pre, surname: e.target.value }
            })
          }} />
          <Input value={editingClient?.email} onChange={(e) => {
            setEditingClient(pre => {
              return { ...pre, email: e.target.value }
            })
          }} />
          <Input value={editingClient?.phone} onChange={(e) => {
            setEditingClient(pre => {
              return { ...pre, phone: e.target.value }
            })
          }} />
        </Modal>
      </header>
    </div>
  );
}

export default Client;