export function getVersion() {
  let version = window.localStorage.getItem('version');
  if (version === null) {
    version = Math.round(Math.random());
    window.localStorage.setItem('version', version);
  }
  return version;
}
export function send(version, startTime, errors) {
  const x = new XMLHttpRequest();
  const f = new FormData();
  f.append('version', version);
  f.append('duration', new Date() - startTime);
  f.append('errors', errors);
  x.open('POST', 'save.php');
  x.send(f);
}
