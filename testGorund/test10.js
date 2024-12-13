const arr = [3, 3, 3, 2, 2, 1, 1, 7, 7, 3, 8];

function kthFrq(arr, k) {
  const hash_map = {};
  let group_map = {};
  
  for (const el of arr) {
    if (el in hash_map) {
      hash_map[el]++;
    } else {
      hash_map[el] = 1;
    }
  }

  for (let key in hash_map) {
    if (hash_map[key] in group_map) {
      group_map[hash_map[key]].push(key);
    } else {
      group_map[hash_map[key]] = [key];
    }
  }

  const sorted_arr = Object.entries(group_map).sort((a, b) => b[0] - a[0]);

  return sorted_arr[k -1][1];
}

console.log(kthFrq(arr, 3));
