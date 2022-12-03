export function getVersion() {
  return window.localStorage.getItem('version');
}
export const init = () => {
  let uid = window.localStorage.getItem('uid');
  if (uid === null) {
    uid = Math.round(Math.random() * 1000000000);
    window.localStorage.setItem('uid', uid);
  }

  let version = window.localStorage.getItem('version');
  if (version === null) {
    version = Math.round(Math.random());
    window.localStorage.setItem('version', version);
  }

  let start = window.localStorage.getItem('start');
  if (start === null) {
    start = new Date();
    window.localStorage.setItem('start', start);
  }
  return [uid, version, start];
};
export function send(goalName, time, errors = 0) {
  const [uid, version] = init();
  const x = new XMLHttpRequest();
  const f = new FormData();
  f.append('version', version);
  f.append('uid', uid);
  f.append('goal', goalName);
  f.append('time', time);
  f.append('errors', errors);
  f.append('ym_uid', window.localStorage.getItem('_ym_uid'));
  x.open('POST', 'save.php');
  x.send(f);
}
export const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

export const saveGoal = (goalName, errors = 0) => {
  const [,, start] = init();
  const time = new Date() - Date.parse(start);
  // eslint-disable-next-line no-undef
  ym(91263052, 'reachGoal', goalName, { time, errors });
  send(goalName, time, errors);
};
