// 判断是否PC
export function IsPC() {
  const userAgentInfo = navigator.userAgent;
  const Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 获取URL参数
export function getQueryVariable(variable) :string{
  const query: string = window.location.search.substring(1);
  const vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return '';
}
