const tests = {
  input: `.test {
  typescale: test;
}

@typescale {
  scale: 1.25;
  font-size: 3rem;
  line-height: 3rem;
}

.truc {
  typescale: default 1;
}
`,
  output: `.test {
  font-size: 1.25rem;
  line-height: 1.5rem;
}

.truc {
  font-size: 3.75rem;
  line-height: 3rem;
}
`,
};

export default tests;
