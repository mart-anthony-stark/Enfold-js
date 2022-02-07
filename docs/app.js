Enfold({
  effects: {
    log: (entry) => {
      console.log("LOG EFFECT");
      console.log(entry.target);
    },
  },
});
