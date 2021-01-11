const colorGenerator=()=>{
  const item=()=>Math.round(Math.random()*(255));
  return `rgb(${item()}, ${item()}, ${item()})`
};

export default colorGenerator;