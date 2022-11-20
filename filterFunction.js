const companies = [
    {name: 'Infosys', category: 'IT', startDate: '01.02.1984', endDate: '01.02.2022'},
    {name: 'CGM', category: 'IT', startDate: '01.02.1986', endDate: '01.02.2025'},
    {name: 'PreA', category: 'IT', startDate: '01.02.1985', endDate: '01.02.2028'},
    {name: 'CapGemini', category: 'IT', startDate: '01.02.1985', endDate: '01.02.2028'},
    {name: 'Tata', category: 'Automobile', startDate: '01.02.1999', endDate: '01.02.2058'},
    {name: 'BMW', category: 'Automobile', startDate: '01.02.1980', endDate: '01.02.2048'},
    {name: 'Mercedez', category: 'Automobile', startDate: '01.02.1975', endDate: '01.02.2038'},
]
// Example 1
 const ITCompanies = companies.filter((company) => {
    if(company.category === 'IT'){
       return company.name;
    };
});
console.log(ITCompanies);

// Example 2
const automobileCompanies = companies.filter((company) => company.category === "Automobile");

console.log(automobileCompanies);