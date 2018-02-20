const tests = {
  input: `@typescale test {
  scale: 1.5;
  font-size: 0.8rem;
  line-height: 2rem;
}

.test {
  typescale: test 0;
}

@typescale {
  scale: 1.25;
  font-size: 3rem;
  line-height: 3rem;
}

.truc {
  typescale: default 1;
}`,
  output: `.test {
  font-size: calc(1 * 0.8rem);
  line-height: calc(1 * 2rem);
}

.truc {
  font-size: calc(1.25 * 3rem);
  line-height: calc(1 * 3rem);
}`,
};

export default tests;
