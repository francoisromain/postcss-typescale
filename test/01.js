const tests = {
  input: `@typescale test {
  scale: 1.5;
  font-size: 0.8rem;
  line-height: 2rem;
}

.test {
  typescale: test 2 2;
}

.truc {
  typescale: 2 2;
}
`,
  output: `.test {
  font-size: calc(2.25 * 0.8rem);
  line-height: calc(2 * 2rem);
}

.truc {
  font-size: calc(1.5625 * 1rem);
  line-height: calc(2 * 1.5rem);
}
`,
};

export default tests;
