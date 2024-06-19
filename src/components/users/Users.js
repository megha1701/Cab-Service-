import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";

import {
  DataGrid,
  GridActionsCellItem,
  GridDeleteIcon,
} from "@mui/x-data-grid";
import { Button, Modal } from "react-bootstrap";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import axios from "axios";

function Users() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [delUserId, setDelUserId] = useState(null);

  const [users, setUsers] = useState([]);

  const handleClose = () => {
    setShowAdd(false);
    setShowEdit(false);
    setShowDel(false);
  };
  const handleShow = () => setShowAdd(true);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get("http://localhost:4200/users");
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 110,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 110,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email address",
      width: 150,
      editable: false,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 110,
      editable: false,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      editable: false,
    },
    {
      field: "role",
      headerName: "Role",
      width: 110,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: false,
    },
    {
      field: "updatedOn",
      headerName: "Updated On",
      width: 150,
      editable: false,
    },
    {
      field: "createdOn",
      headerName: "Created On",
      width: 150,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => {
            console.log("params", params);
            setShowEdit(true);
            setEditUserId(params.id);
          }}
          label="Edit"
        />,
        <GridActionsCellItem
          icon={<GridDeleteIcon />}
          onClick={() => {
            setShowDel(true);
            setDelUserId(params.id);
          }}
          label="Delete"
        />,
      ],
    },

    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) =>
    //     `${row.firstName || ""} ${row.lastName || ""}`,
    // },
  ];

  const rows = users;

  const addEditRecord = () => {
    setShowAdd(false);
    setShowEdit(false);
    getUsers();
  };

  async function handleDeleteUser() {
    try {
      await axios.delete(`http://localhost:4200/users/${delUserId}`);
      setShowDel(false);
      getUsers();
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main">
      <h2>User Management</h2>
      <div className="filter_section">
        <button onClick={handleShow} type="button" className="btn btn-primary">
          Add User
        </button>
      </div>

      {/* Add User Popup Modal */}
      <Modal size="lg" show={showAdd} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUser setShowAdd={setShowAdd} addEditRecord={addEditRecord} />
        </Modal.Body>
      </Modal>

      {/* Edit User Popup Modal */}
      <Modal size="lg" show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser
            setShowEdit={setShowEdit}
            editUserId={editUserId}
            addEditRecord={addEditRecord}
          />
        </Modal.Body>
      </Modal>

      {/* Delete User Popup Modal */}
      <Modal show={showDel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this Record?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="main__section">
        {/* <img
          src="./images/table.png"
          style={{ width: "1125px", height: "540px" }}
        /> */}
        <Box sx={{ height: 470, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}

export default Users;
