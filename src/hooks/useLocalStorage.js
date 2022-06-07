export default function useLocalStorage() {
  function getItem(key) {
    const item = localStorage.getItem(key.trim().toLowerCase());
    return JSON.parse(item);
  }

  function setItem(key, value) {
    localStorage.setItem(key.trim().toLowerCase(), value);
    return 1;
  }

  function searchItem(key) {
    const item = localStorage.getItem(key.trim().toLowerCase());
    if (item === null || item === undefined || item === '') return false;
    return true;
  }

  function appendItem(key, value) {
    const item = getItem(key);
    const appendValue = [...item, value];
    setItem(key, JSON.stringify(appendValue));
  }

  return { getItem, setItem, searchItem, appendItem };
}
