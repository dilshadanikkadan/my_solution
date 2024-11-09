// 3) Write a function to get a holiday by date range (01-11-2024 to 30-11-2024);

const holidayList = [
  { name: "Pongal", Start: "2024-02-22", End: "2024-02-25" },
  { name: "New Year", Start: "2024-10-25", End: "2024-11-05" },
  { name: "Deepavali", Start: "2024-11-01", End: "2024-11-05" },
  { name: "Christmas", Start: "2024-11-28", End: "2024-12-05" },
  { name: "myLeave", Start: "2024-11-20", End: "2024-11-23" },
  { name: "myLeave1", Start: "2024-11-27", End: "2024-12-23" },
];

function range(start, end) {
  let res = [];
  for (let i = start; i <= end; i++) {
    res.push(i);
  }
  return res;
}

function helper(item) {

  const result = [];
  let end_day, start_day, response;
  const { End, Start } = item;
  const start_date = new Date(Start);
  const end_date = new Date(End);
   if (end_date.getMonth() === 10) {
    end_day = end_date.getDate();
    if (start_date.getMonth() === 10) {        
      start_day = start_date.getDate();
      response = range(start_day, end_day);
      result.push(...response);
    } else {
      response = range(1, end_day);
      result.push(...response);
    }
  } else if (start_date.getMonth() === 10) {
    const start_ = start_date.getDate();
    response = range(start_, 30);
    result.push(...response);
  }
  return result;
}

function getTotalDays(list) {
  const hash_set = new Set();
  for (let obj of list) {
    const res = helper(obj);
    if (res.length) {
      while (res.length) {
        hash_set.add(res.pop());
      }
    }
  }
  return Array.from(hash_set).length;
  
}
console.log(getTotalDays(holidayList));

