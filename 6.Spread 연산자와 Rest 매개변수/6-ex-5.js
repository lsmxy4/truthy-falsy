function averageExceptFirst(num,...args) {
  const sum = args.reduce((a,c) => a+c,0)

  return sum / args.length
}

console.log(averageExceptFirst(10, 20, 30, 40));
