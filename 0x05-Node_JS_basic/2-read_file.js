const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.toString().split('\n');
  data.shift();
  if (data.slice(-1)[0] === '') {
    data.pop();
  }
  const CSList = [];
  const SWEList = [];
  let numberOfCsStudents = 0;
  let numberOfSweStudents = 0;
  console.log(`Number of students: ${data.length}`);

  for (const line of data) {
    const tokensList = line.split(',');
    if (tokensList.slice(-1)[0] === 'CS') {
      numberOfCsStudents += 1;
      CSList.push(tokensList[0]);
    } else if (tokensList.slice(-1)[0] === 'SWE') {
      numberOfSweStudents += 1;
      SWEList.push(tokensList[0]);
    }
  }

  console.log(`Number of students in CS: ${numberOfCsStudents}. List: ${CSList.join(', ')}`);
  console.log(`Number of students in SWE: ${numberOfSweStudents}. List: ${SWEList.join(', ')}`);
}

module.exports = countStudents;
