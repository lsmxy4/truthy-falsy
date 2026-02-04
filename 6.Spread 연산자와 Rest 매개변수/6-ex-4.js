const defaultConfig = {
  theme: "light",
  language: "ko",
  debug: false
};

const userConfig = {
  theme: "dark",
  debug: true
};

const finalConfig = {
    ...defaultConfig,
    ...userConfig
}

console.log(finalConfig)