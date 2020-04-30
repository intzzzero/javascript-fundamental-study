let globalFunc;
{
  let blockVar = 'Hello';
  globalFunc = () => {console.log(blockVar)};
}
globalFunc();