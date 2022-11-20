const companies = [
    {name: 'Infosys', category: 'IT', startDate: '01.02.1984', endDate: '01.02.2022'},
    {name: 'CGM', category: 'IT', startDate: '01.02.1986', endDate: '01.02.2025'},
    {name: 'Wipro', category: 'IT', startDate: '01.02.1983', endDate: '01.02.2027'},
    {name: 'PreA', category: 'IT', startDate: '01.02.1985', endDate: '01.02.2028'},
    {name: 'Tata', category: 'Automobile', startDate: '01.02.1999', endDate: '01.02.2058'},
    {name: 'BMW', category: 'Automobile', startDate: '01.02.1980', endDate: '01.02.2048'},
    {name: 'Mercedez', category: 'Automobile', startDate: '01.02.1975', endDate: '01.02.2038'},
]
// forEach and map functions are similar
// Example 1
const companyName = companies.map((company) => {
return company.name; 
});
console.log(companyName);

// Example 1

const categoryName = companies.map((company) => company.category);
console.log(categoryName);