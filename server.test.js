const axios = require('axios');
const https = require('https');
const http = require('http');
const api = 'http://avivion.fr:5100/api';

const bindParams = (params) => {
  var ret = '?';
  for(var key in params) {
    ret += key + '=' + params[key] + '&';
  }
  return ret.substr(0, ret.length-1);
}


// CREATE cocktail
let today = new Date();
let c_date = today.getFullYear() + '/' + today.getMonth() + '/' + today.getDay();
c_date += ' ' + today.getHours() + ':' + today.getMinutes();
const cocktail = {
  title: "Margarita",
  picture_path: "",
  desc: "",
  ingredients: [
    {ingredient: 'tequila', quantite: '2 maxis'},
    {ingredient: 'citron', quantite: '1 baby'}
  ],
  etapes : ['mettre la tequila', 'mettre le citron'],
  date_creation: c_date,
  createur: "chichouvivion@gmail.com",
  public: false
};

test('create a cocktail and read it', async () => {
  // create the cocktail
  let c_cocktail = cocktail
  res = await axios.post(api + '/cocktail', c_cocktail);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: "Margarita"
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
  console.log(rep.data);
  expect(rep.data.cocktail).toStrictEqual(c_cocktail);
});

//UPDATE cocktail

test('update a cocktail picture and read it', async () => {
  // update the cocktail picture
  let u_params = {
    picture_path: "picture.jpg",
    title: 'Margarita'
  };
  res = await axios.put(api + '/cocktail', u_params);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: "Margarita"
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
  let u_cocktail = cocktail;
  u_cocktail.picture_path = "picture.jpg";
  expect(rep.data.cocktail).toStrictEqual(u_cocktail);
});

test('update a cocktail description and read it', async () => {
  // update the cocktail description
  let u_params = {
    desc: "a description",
    title: 'Margarita'
  };
  res = await axios.put(api + '/cocktail', u_params);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: 'Margarita'
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
  let u_cocktail = cocktail;
  u_cocktail.desc = "a description";
  expect(rep.data.cocktail).toStrictEqual(u_cocktail);
});

test('update a cocktail ingredients and read it', async () => {
  // update the cocktail ingredients
  let u_params = {
    ingredients: [
      {ingredient: 'tequila', quantite: '2 maxis'},
      {ingredient: 'citron', quantite: '1 baby'},
      {ingredient: 'sucre', quantite: '1 trait'}
    ],
    title: 'Margarita'
  };
  res = await axios.put(api + '/cocktail', u_params);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: 'Margarita'
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
  let u_cocktail = cocktail;
  u_cocktail.ingredients = [
    {ingredient: 'tequila', quantite: '2 maxis'},
    {ingredient: 'citron', quantite: '1 baby'},
    {ingredient: 'sucre', quantite: '1 trait'}
  ];
  expect(rep.data.cocktail).toStrictEqual(u_cocktail);
});

test('update a cocktail steps and read it', async () => {
  // update the cocktail steps
  let u_params = {
    etapes : ['mettre la tequila', 'mettre le citron', 'mettre le sucre'],
    title: 'Margarita'
  };
  res = await axios.put(api + '/cocktail', u_params);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: 'Margarita'
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
  let u_cocktail = cocktail;
  u_cocktail.etapes = ['mettre la tequila', 'mettre le citron', 'mettre le sucre'];
  expect(rep.data.cocktail).toStrictEqual(u_cocktail);
});

test('update a cocktail public and read it', async () => {
  // update the cocktail public
  let u_params = {
    public: true,
    title: 'Margarita'
  };
  res = await axios.put(api + '/cocktail', u_params);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: 'Margarita'
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
  let u_cocktail = cocktail;
  u_cocktail.public = true;
  expect(rep.data.cocktail).toStrictEqual(u_cocktail);
});

test('update everything in a cocktail and read it', async () => {
  // update the cocktail description
  let u_cocktail = cocktail;
  res = await axios.put(api + '/cocktail', u_cocktail);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: 'Margarita'
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
  expect(rep.data.cocktail).toStrictEqual(u_cocktail);
});

//DELETE cocktail

test('delete a cocktail pseudo and read it', async () => {
  // delete the cocktail
  let d_params = {
    title: "Margarita"
  };
  res = await axios.delete(api + '/cocktail', d_params);
  expect(res.status).toBe(200);
  
  // read the cocktail
  let r_params = {
    title: "Margarita"
  }
  rep = await axios.get(api + '/cocktail' + bindParams(r_params));
  expect(rep.status).toBe(200);
});