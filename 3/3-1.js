const count = 0 ?? 10;
console.log(count); // 10 ❌ (0인데 덮어씀)

const userName = null ?? "Guest";
console.log(userName); // "Guest"
