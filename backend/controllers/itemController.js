//cart items contains qty, name, id, desc, price
const axios = require('axios');


//likewise, copy these for the js logic that occurs per each action

//https://65a8677f219bfa3718671c70.mockapi.io/:endpoint

const getAllItems = (req,res) => {


  axios.get('https://65a8677f219bfa3718671c70.mockapi.io/items')
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

const getAnItem = (req,res) => {
  // let user = users.filter(u => u.id === + req.params.id)

  // if (user.length === 0) {
  //   res.end();
  // } else {
  //   res.json(user[0])
  // }
}

const deleteItem = (req,res) => {
  // users = users.filter(u => u.id !== + req.params.id);
  // console.log(users);
  // res.json({message: 'Deleted item with id of ' + req.params.id})
}


module.exports = {
  getAllItems,
  getAnItem,
  deleteItem,
}