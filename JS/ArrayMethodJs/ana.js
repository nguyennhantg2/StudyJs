const array = [
  {
    Id: 1,
    Username: "",
    Password: "",
    Fullname: "nhan",
    Class: "",
    Shortdate: "5/5/2022",
    createAt: "",
  },
  {
    Id: 2,
    Username: "",
    Password: "",
    Fullname: "nhan",
    Class: "",
    Shortdate: "5/5/2022",
    createAt: "",
  },
  {
    Id: 3,
    Username: "",
    Password: "",
    Fullname: "nhan",
    Class: "",
    Shortdate: "6/5/2022",
    createAt: "",
  },
  {
    Id: 4,
    Username: "",
    Password: "",
    Fullname: "nhan",
    Class: "",
    Shortdate: "7/5/2022",
    createAt: "",
  }
]

const result = array.reduce(function (r, a) {
  r[a.Shortdate] = r[a.Shortdate] || [];
  r[a.Shortdate].push(a);
  return r;
}, Object.create(null));

const arr = []

for (const [key, value] of Object.entries(result)) {
  console.log(`${key}: ${value}`);
  arr.push({
    name: key,
    total: value.length,
    data: [...value]
  })
}

console.log('a', result)
console.log('a', arr)