const man = [
  {
    first_name: 'sankara',
    location: 'kdm'
  },
  {
    first_name: 'maha',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];
y=[];
man.map(function(val){
	y.push(val.first_name+ "lives in" +val.location);
})
console.log(y);
