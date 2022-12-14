function calcular (matriz) {
    let anos = [];
    
    const maxYear = Math.max(...[].concat(...matriz));
    const minYear = Math.min(...[].concat(...matriz));
  
    let count;
    let max = 0;
    for (let year = minYear; year <= maxYear; year++) {
      count = 0;
      matriz.forEach(element => {
        if ((year >= element[0]) && (year <= element[1])) {
          count++;
        }});
      
      if (count > max) {
        anos = [year];
        max = count;
      } else if (count === max) {
        anos.push(year);
      }
    }
    return anos;
}
  
console.log(calcular([[1960,2005],[1945,2008],[1938,1999]]));