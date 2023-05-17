import ps from "./pubsub";

function storeLocal(obj) {
  const { key } = obj;
  const { value } = obj;
  localStorage.setItem(key, value);
}

export default function getLocal() {
  const key = localStorage.key(0);
  const json = localStorage.getItem(key);
  const obj = JSON.parse(json);
  if (!(obj === null)) {
    ps.publish("set-local", obj);
  }
}

ps.subscribe("store-local", storeLocal);
