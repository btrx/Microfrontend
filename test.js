import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 1000,
  duration: "10s",
};

export default function () {
  const res = http.get("https://skripis-ltmyap116-btrx.vercel.app/");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 500,
  });
  sleep(1);
}