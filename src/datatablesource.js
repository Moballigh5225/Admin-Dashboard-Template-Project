import { width } from "@mui/system";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: "130",
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Moballigh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1mobi@gmail.com",
    age: 24,
  },
  {
    id: 2,
    username: "Saif Khan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2saif@gmail.com",
    status: "passive",
    age: 24,
  },
  {
    id: 3,
    username: "Saad Khan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3saad@gmail.com",
    status: "pending",
    age: 23,
  },
  {
    id: 4,
    username: "Zaid khan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4zaid@gmail.com",
    status: "active",
    age: 27,
  },
  {
    id: 5,
    username: "Anas Quadri",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5anas@gmail.com",
    status: "passive",
    age: 23,
  },
  {
    id: 6,
    username: "Haseen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6haseen@gmail.com",
    status: "active",
    age: 25,
  },
  {
    id: 7,
    username: "Sameer",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7sameer@gmail.com",
    status: "passive",
    age: 24,
  },
  {
    id: 8,
    username: "Saquib",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8saquib@gmail.com",
    status: "active",
    age: 23,
  },
  {
    id: 9,
    username: "Nawin",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "nawin@gmail.com",
    status: "pending",
    age: 27,
  },
  {
    id: 10,
    username: "Sanju",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sanju@gmail.com",
    status: "active",
    age: 24,
  },
];
