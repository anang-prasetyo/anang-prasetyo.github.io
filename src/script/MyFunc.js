export default function useFunc(){
  let filterUpStr = function(a,b) {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
  
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  }
  let filterDownInt = function(a,b) {
    return b.level - a.level
  }

  return { filterDownInt, filterUpStr }
}